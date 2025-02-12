const { getListTramas } = require('./functions/process-data')
const dfac_path = "./dfac_20461665820_00009153_0029878_20250121.txt"
const date_path = "./date_20461665820_00009153_0029878_20250121.txt"
const dser_path = './dser_20461665820_00009153_0029878_20250121.txt'
const dfar_path = './dfar_20461665820_00009153_0029878_20250121.txt'

const dfac_fields = [
    { number_field: 1, field: "Fecha de envío", length: 8, initial_position: 1 },
    { number_field: 2, field: "Hora de Envío", length: 6, initial_position: 9 },
    { number_field: 3, field: "Número de Lote", length: 7, initial_position: 15 },
    { number_field: 4, field: "Código del Fondo de Aseguramiento en Salud (IAFAS) asignado por  SUSALUD", length: 5, initial_position: 22 },
    { number_field: 5, field: "Ruc del prestador o IPRESS", length: 11, initial_position: 27 },
    { number_field: 6, field: "Código IPRESS", length: 8, initial_position: 38 },
    { number_field: 7, field: "Tipo Documento de Pago", length: 2, initial_position: 46 },
    { number_field: 8, field: "Número de Documento de Pago", length: 12, initial_position: 48 },
    { number_field: 9, field: "Fecha de Emisión", length: 8, initial_position: 60 },
    { number_field: 10, field: "Producto", length: 5, initial_position: 68 },
    { number_field: 11, field: "Cantidad de prestaciones de salud del documento facturador", length: 5, initial_position: 73 },
    { number_field: 12, field: "Mecanismo de Pago", length: 2, initial_position: 78 },
    { number_field: 13, field: "Sub Tipo de Mecanismo de Pago", length: 3, initial_position: 80 },
    { number_field: 14, field: "Monto Pre Pactado (en los casos que aplica)", length: 12, initial_position: 83 },
    { number_field: 15, field: "Fecha de inicio del Periodo Pre Pactado", length: 8, initial_position: 95 },
    { number_field: 16, field: "Tipo de moneda", length: 1, initial_position: 103 },
    { number_field: 17, field: "Monto exonerado de IGV", length: 12, initial_position: 104 },
    { number_field: 18, field: "Total Copago Fijo Afecto a IGV sin IGV", length: 12, initial_position: 116 },
    { number_field: 19, field: "Total Copago Fijo Exonerado de IGV", length: 12, initial_position: 128 },
    { number_field: 20, field: "Total Copago Variable afecto a IGV sin IGV", length: 12, initial_position: 140 },
    { number_field: 21, field: "Total Copago Variable Exonerado de IGV", length: 12, initial_position: 152 },
    { number_field: 22, field: "Base imponible", length: 12, initial_position: 164 },
    { number_field: 23, field: "IGV del Monto Facturado ", length: 12, initial_position: 176 },
    { number_field: 24, field: "Monto Total Facturado", length: 12, initial_position: 188 },
    { number_field: 25, field: "Tipo de identificación de la Nota", length: 1, initial_position: 200 },
    { number_field: 26, field: "Número de la Nota", length: 12, initial_position: 201 },
    { number_field: 27, field: "Monto de la Nota", length: 12, initial_position: 213 },
    { number_field: 28, field: "Fecha de la Nota", length: 8, initial_position: 225 },
    { number_field: 29, field: "Motivo de la Nota", length: 1, initial_position: 233 },
    { number_field: 30, field: "Fecha del primer envio del documento facturador", length: 8, initial_position: 234 },
    { number_field: 31, field: "Indicador de Factura Global", length: 31, initial_position: 242 },
    { number_field: 32, field: "Código IAFAS que remite información a SUSALUD", length: 5, initial_position: 243 },
    { number_field: 33, field: "Periodo de envío a  SUSALUD", length: 6, initial_position: 248 },
    { number_field: 34, field: "Fecha de Recepción de la Transacción Electrónica", length: 8, initial_position: 254 },
    { number_field: 35, field: "Fecha de Recepción del Documento Facturador", length: 8, initial_position: 262 },
    { number_field: 36, field: "Total Liquidado por las IAFAS", length: 12, initial_position: 270 },
    { number_field: 37, field: "Número de Liquidación asignado por la IAFAS", length: 14, initial_position: 282 },
    { number_field: 38, field: "Fecha de Liquidación", length: 8, initial_position: 296 },
    { number_field: 38, field: "Código de IPRESS que remite información a SUSALUD", length: 8, initial_position: 243 },
    { number_field: 38, field: "Periodo de envío a  SUSALUD", length: 6, initial_position: 2951 },
]
const date_fields = [
    { number_field: 1, field: "Ruc del prestador o IPRESS", length: 11, initial_position: 1 },
    { number_field: 2, field: "Código IPRESS", length: 8, initial_position: 12 },
    { number_field: 3, field: "Tipo Documento de pago", length: 2, initial_position: 20 },
    { number_field: 4, field: "Número de Documento de pago", length: 12, initial_position: 22 },
    { number_field: 5, field: "Correlativo de la prestación", length: 5, initial_position: 34 },
    { number_field: 6, field: "Código de prestación Interno de la IPRESS", length: 10, initial_position: 39 },
    { number_field: 7, field: "Tipo de Afiliación del Paciente", length: 1, initial_position: 49 },
    { number_field: 8, field: "Código de Asegurado del Paciente", length: 20, initial_position: 50 },
    { number_field: 9, field: "Tipo de documento de identidad", length: 1, initial_position: 70 },
    { number_field: 10, field: "Número del documento de identidad", length: 15, initial_position: 71 },
    { number_field: 11, field: "Número de Historia Clínica", length: 8, initial_position: 86 },
    { number_field: 12, field: "Documento de autorización de la prestación", length: 2, initial_position: 94 },
    { number_field: 13, field: "Número del documento de autorización.", length: 20, initial_position: 96 },
    { number_field: 14, field: "Segundo Documento de autorización de la prestación", length: 2, initial_position: 116 },
    { number_field: 15, field: "Número del segundo documento de autorización.", length: 20, initial_position: 118 },
    { number_field: 16, field: "Tipo de Cobertura o Tipo de Prestación", length: 1, initial_position: 138 },
    { number_field: 17, field: "Subtipo de cobertura", length: 4, initial_position: 139 },
    { number_field: 18, field: "Primer Diagnóstico (CIE10)", length: 5, initial_position: 143 },
    { number_field: 19, field: "Segundo Diagnóstico (CIE10)", length: 5, initial_position: 148 },
    { number_field: 20, field: "Tercer diagnóstico (CIE10)", length: 5, initial_position: 153 },
    { number_field: 21, field: "Fecha de Prestación", length: 8, initial_position: 158 },
    { number_field: 22, field: "Hora de Inicio de la Prestación", length: 6, initial_position: 166 },
    { number_field: 23, field: "Tipo del Profesional Responsable de la Prestación", length: 2, initial_position: 172 },
    { number_field: 24, field: "Número de Colegiatura del Profesional Responsable de la Prestación", length: 6, initial_position: 174 },
    { number_field: 25, field: "Tipo de documento de identidad del Profesional Responsable de la Prestación", length: 1, initial_position: 180 },
    { number_field: 26, field: "Número del documento de identidad del profesional responsable", length: 15, initial_position: 181 },
    { number_field: 27, field: "RUC de Entidad de Referencia", length: 11, initial_position: 196 },
    { number_field: 28, field: "Fecha de la Transferencia", length: 8, initial_position: 207 },
    { number_field: 29, field: "Hora de transferencia", length: 6, initial_position: 215 },
    { number_field: 30, field: "Tipo de Hospitalización", length: 1, initial_position: 221 },
    { number_field: 31, field: "Fecha Ingreso Hospitalario", length: 8, initial_position: 222 },
    { number_field: 32, field: "Fecha de Egreso Hospitalario", length: 8, initial_position: 2309 },
    { number_field: 33, field: "Tipo de Egreso Hospitalario", length: 2, initial_position: 238 },
    { number_field: 34, field: "Días de Estancia Facturable", length: 3, initial_position: 240 },
    { number_field: 35, field: "Gasto por Honorarios y procedimientos sin IGV", length: 12, initial_position: 243 },
    { number_field: 36, field: "Gasto por Procedimientos Odontológicos sin IGV", length: 12, initial_position: 255 },
    { number_field: 37, field: "Gasto presentado por Hotelería, Servicio Clínico y Tópico sin IGV", length: 12, initial_position: 267 },
    { number_field: 38, field: "Gasto por Exámenes auxiliares de laboratorio sin IGV", length: 12, initial_position: 279 },
    { number_field: 39, field: "Gasto por Exámenes auxiliares por imágenes sin IGV", length: 12, initial_position: 291 },
    { number_field: 40, field: "Gasto por Farmacia e insumos sin IGV", length: 12, initial_position: 303 },
    { number_field: 41, field: "Gasto en protesis sin IGV", length: 12, initial_position: 315 },
    { number_field: 42, field: "Gasto en productos, servicios o medicamentos exonerados de IGV", length: 12, initial_position: 327 },
    { number_field: 43, field: "Otros gastos por prestaciones de salud sin IGV", length: 12, initial_position: 339 },
    { number_field: 44, field: "Copago Fijo afecto a IGV sin IGV", length: 12, initial_position: 351 },
    { number_field: 45, field: "Copago Fijo exonerado de IGV", length: 12, initial_position: 363 },
    { number_field: 46, field: "Copago Variable afecto a IGV sin IGV", length: 12, initial_position: 375 },
    { number_field: 47, field: "Copago Variable exonerado de IGV", length: 12, initial_position: 387 },
    { number_field: 48, field: "Total de Gastos Cubiertos sin IGV", length: 12, initial_position: 399 },
    { number_field: 49, field: "Estado del Paciente", length: 1, initial_position: 411 },
    { number_field: 50, field: "Fecha de Nacimiento del Paciente", length: 8, initial_position: 412 },
    { number_field: 52, field: "Sexo del Paciente", length: 1, initial_position: 420 },
    { number_field: 53, field: "Filiación del Paciente", length: 2, initial_position: 421 },
    { number_field: 54, field: "Total Liquidado por las IAFAS", length: 12, initial_position: 423 },
    { number_field: 55, field: "Número de Liquidación asignado por la IAFAS", length: 14, initial_position: 435 },
    { number_field: 56, field: "Fecha de Liquidación", length: 8, initial_position: 449 },

]
const dser_fields = [
    { number_field: 1, field: "RUC del prestador o IPRESS", length: 11, initial_position: 1 },
    { number_field: 2, field: "Código IPRESS", length: 8, initial_position: 12 },
    { number_field: 3, field: "Tipo Documento de Pago",length: 2, initial_position: 20 },
    { number_field: 4, field: "Número de Documento de Pago", length: 12, initial_position: 22 },
    { number_field: 5, field: "Correlativo de la prestación", length: 5, initial_position: 34 },
    { number_field: 6, field: "Código de prestación Interno de la IPRESS", length: 4, initial_position: 39 },
    { number_field: 7, field: "Tipo de Afiliación del Paciente", length: 4, initial_position: 43 },
    { number_field: 8, field: "Código de Asegurado del Paciente", length: 2, initial_position: 45 },
    { number_field: 9, field: "Tipo de documento de identidad", length: 10, initial_position: 55 },
    { number_field: 10, field: "Número del documento de identidad", length: 70, initial_position: 125 },
    { number_field: 11, field: "Número de Historia Clínica", length: 8, initial_position: 133 },
    { number_field: 12, field: "Documento de autorización de la prestación", length: 2, initial_position:135 },
    { number_field: 13, field: "Número del documento de autorización.", length: 6, initial_position: 141 },
    { number_field: 14, field: "Segundo Documento de autorización de la prestación", length: 1, initial_position: 142 },
    { number_field: 15, field: "Número del segundo documento de autorización.", length: 15, initial_position: 157 },
    { number_field: 16, field: "Tipo de Cobertura o Tipo de Prestación", length: 5, initial_position: 162 },
    { number_field: 17, field: "Subtipo de cobertura", length: 12, initial_position: 174 },
    { number_field: 18, field: "Primer Diagnóstico (CIE10)", length: 12, initial_position: 186 },
    { number_field: 19, field: "Segundo Diagnóstico (CIE10)", length: 12, initial_position: 198 },
    { number_field: 20, field: "Tercer diagnóstico (CIE10)", length: 12, initial_position: 210 },
    { number_field: 21, field: "Fecha de Prestación", length: 5, initial_position: 222 },
    { number_field: 22, field: "Hora de Inicio de la Prestación", length: 1, initial_position: 227 },
    { number_field: 23, field: "Tipo del Profesional Responsable de la Prestación", length: 2, initial_position: 228 }
]
const dfar_fields = [
    { number_field: 1, field: "RUC del prestador o IPRESS", length: 11, initial_position: 1 },
    { number_field: 2, field: "Código IPRESS", length: 8, initial_position: 12 },
    { number_field: 3, field: "Tipo Documento de Pago",length: 2, initial_position: 20 },
    { number_field: 4, field: "Número de Documento de Pago", length: 12, initial_position: 22 },
    { number_field: 5, field: "Correlativo de la prestación", length: 5, initial_position: 34 },
    { number_field: 6, field: "Correlativo de los Productos de Farmacia de la atención", length: 4, initial_position: 39 },
    { number_field: 7, field: "Catálogo de Producto de Farmacia", length: 1, initial_position: 43 },
    { number_field: 8, field: "Código de Producto Farmacia", length: 15, initial_position: 44 },
    { number_field: 9, field: "Código de producto del observatorio de medicamentos de la DIGEMID", length: 6, initial_position: 59 },
    { number_field: 10, field: "Fecha de Dispensación de Farmacia", length: 8, initial_position: 65 },
    { number_field: 11, field: "Cantidad de Venta del Producto", length: 7, initial_position: 73 },
    { number_field: 12, field: "Monto Unitario sin Impuesto (*)", length: 12, initial_position: 80 },
    { number_field: 13, field: "Copago del Producto de Farmacia (*)", length: 12, initial_position: 92 },
    { number_field: 14, field: "Monto(s) Presentado(s) de (los) Producto(s) de Farmacia (*)", length: 12, initial_position: 104 },
    { number_field: 15, field: "Monto(s) No Cubierto(s) de (los) Producto(s) de Farmacia (*)", length: 12, initial_position: 116 },
    { number_field: 16, field: "Diagnóstico Asociado al Producto de Farmacia", length: 5, initial_position: 128 },
    { number_field: 17, field: "Productos Exento de IGV", length: 1, initial_position: 133 },
    { number_field: 18, field: "Guía de farmacia", length: 12, initial_position: 134 },
]
getListTramas(dfac_path,dfac_fields)
getListTramas(date_path,date_fields)
getListTramas(dser_path,dser_fields)
getListTramas(dfar_path,dfar_fields)