import { readFile, writeFile } from 'node:fs/promises'

const input = new URL('../public/cv-resia-djonga.jpeg', import.meta.url)
const output = new URL('../public/cv-resia-djonga.pdf', import.meta.url)
const jpeg = await readFile(input)

let width = 0
let height = 0
for (let offset = 2; offset < jpeg.length;) {
  if (jpeg[offset] !== 0xff) { offset += 1; continue }
  const marker = jpeg[offset + 1]
  const length = jpeg.readUInt16BE(offset + 2)
  if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
    height = jpeg.readUInt16BE(offset + 5)
    width = jpeg.readUInt16BE(offset + 7)
    break
  }
  offset += 2 + length
}
if (!width || !height) throw new Error('Could not read CV image dimensions')

const pageWidth = 595.28
const pageHeight = 841.89
const scale = Math.min(pageWidth / width, pageHeight / height)
const imageWidth = width * scale
const imageHeight = height * scale
const x = (pageWidth - imageWidth) / 2
const y = (pageHeight - imageHeight) / 2
const content = Buffer.from(`q\n${imageWidth} 0 0 ${imageHeight} ${x} ${y} cm\n/Im0 Do\nQ\n`)

const objects = [
  Buffer.from('<< /Type /Catalog /Pages 2 0 R >>'),
  Buffer.from('<< /Type /Pages /Kids [3 0 R] /Count 1 >>'),
  Buffer.from(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`),
  Buffer.concat([Buffer.from(`<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`), jpeg, Buffer.from('\nendstream')]),
  Buffer.concat([Buffer.from(`<< /Length ${content.length} >>\nstream\n`), content, Buffer.from('endstream')]),
]

const chunks = [Buffer.from('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n', 'binary')]
const offsets = [0]
let length = chunks[0].length
for (let index = 0; index < objects.length; index += 1) {
  offsets.push(length)
  const object = Buffer.concat([Buffer.from(`${index + 1} 0 obj\n`), objects[index], Buffer.from('\nendobj\n')])
  chunks.push(object)
  length += object.length
}
const xrefOffset = length
const xref = [`xref\n0 ${objects.length + 1}\n`, '0000000000 65535 f \n', ...offsets.slice(1).map((offset) => `${String(offset).padStart(10, '0')} 00000 n \n`)].join('')
chunks.push(Buffer.from(`${xref}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`))
await writeFile(output, Buffer.concat(chunks))
