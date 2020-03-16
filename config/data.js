// ***********************************************************
// Ye Olde Metric Configuration
//
// Here's the format:
// "m<the metric number>": {
//        "metric"        the metric number
//        "type"          Type of calculation to be performed (determines files to fetch). Options are sum, mean, and weighted.
//                            sum: r<metric>.csv
//                            mean: n<metric>.csv
//                            weighted: r<metric>.csv and d<metric>.csv
//        "category"      the category of the metric
//        "title"         metric descriptive title
//        "title_es"      Spanish-language title
//        "accuracy"      [optional] set true if metric has an accuracy file (i.e. m<metric>-accuracy.csv)
//        "label"         [optional] metric unit information
//        "decimals"      [optional] number of decimal places to display (default is 0)
//        "prefix"        [optional] prefix for the number, like '$'
//        "world_val"    [optional] override study area values for entire area via array
//                                 ex: "world_val": {"y_2013": 1234, "y_2015": 2345}
//        "suffix"        [optional] suffix for the number, like '%'
//        "raw_label"     [optional] label for raw number if available (also makes raw number visible)
//        "geographies"   [optional] list of geographies for which this metric is available. if these are used, the datagen.js script
//                        will look for files in a `geography` subdirectory of `metric` for each `geography`
// }
// ***********************************************************

module.exports = {
  'mAVEAGE': {
    'metric': 'AVEAGE',
    'category': 'Health',
    'label': 'years',
    'title': 'Average Age of Death',
    'title_es': 'Edad Promedio de Muerte',
    'decimals': 1,
    'type': 'mean',
    'world_val': {'y_2009': 69.1, 'y_2014': 69.6},
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mBACH': {
    'metric': 'BACH',
    'category': 'Education',
    'suffix': '%',
    'raw_label': 'adults',
    'title_es': 'Porcentaje de adultos con licenciaturas o más',
    'title': 'Percent of Adults with a Bachelors Degree or More',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'tract',
    ],
  },
  'mBIKEWK': {
    'metric': 'BIKEWK',
    'accuracy': 'true',
    'category': 'Infrastructure and Amenities',
    'suffix': '%',
    'raw_label': 'people',
    'title': 'Commuting to Work by Bicycle',
    'title_es': 'Viaje al trabajo en bicicleta',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'tract',
    ],
  },
  'mCC45': {
    'metric': 'CC45',
    'category': 'Education',
    'suffix': '%',
    'title': 'Child Care Centers with 4 or 5 Star Ratings',
    'title_es': 'Centros de Cuidado de Niños Calificados con 4 o 5 estrellas',
    'decimals': 1,
    'raw_label': 'centers',
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mCCC': {
    'metric': 'CCC',
    'category': 'Education',
    'title': 'Child Care Centers per Square Mile',
    'title_es': 'Centros de Cuidado de Niños por milla cuadrada',
    'label': 'centers per sq mi',
    'raw_label': 'centers',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mCKD_ASIAN': {
    'metric': 'CKD_ASIAN',
    'category': 'Health',
    'title': 'Chronic Kidney Disease (Asian Population)',
    'title_es': 'Enfermedad Renal Crónica (Población Asiática)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 3.08, 'y_2017': 3.7},
    'geographies': [
      'tract',
    ],
  },
  'mCKD_BLACK': {
    'metric': 'CKD_BLACK',
    'category': 'Health',
    'title': 'Chronic Kidney Disease (Black or African American Population)',
    'title_es': 'Enfermedad Renal Crónica (Población Negra o Afroamericana)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 9.11, 'y_2017': 9.87},
    'geographies': [
      'tract',
    ],
  },
  'mCKD_FEMALE': {
    'metric': 'CKD_FEMALE',
    'category': 'Health',
    'title': 'Chronic Kidney Disease (Female)',
    'title_es': 'Enfermedad Renal Crónica (Mujeres)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 8.41, 'y_2017': 9.38},
    'geographies': [
      'tract',
    ],
  },
  'mCKD_HISPANIC': {
    'metric': 'CKD_HISPANIC',
    'category': 'Health',
    'title': 'Chronic Kidney Disease (Hispanic or Latino/a Population)',
    'title_es': 'Enfermedad Renal Crónica (Población Hispana o Latina)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 2.53, 'y_2017': 3.11},
    'geographies': [
      'tract',
    ],
  },
  'mCKD_MALE': {
    'metric': 'CKD_MALE',
    'category': 'Health',
    'title': 'Chronic Kidney Disease (Male)',
    'title_es': 'Enfermedad Renal Crónica (Hombres)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 8.51, 'y_2017': 9.13},
    'geographies': [
      'tract',
    ],
  },
  'mCKD_TOTAL': {
    'metric': 'CKD_TOTAL',
    'category': 'Health',
    'title': 'Chronic Kidney Disease (Adult Population)',
    'title_es': 'Enfermedad Renal Crónica (Población Adulta)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 8.43, 'y_2017': 9.26},
    'geographies': [
      'tract',
    ],
  },
  'mCKD_WHITE': {
    'metric': 'CKD_WHITE',
    'category': 'Health',
    'title': 'Chronic Kidney Disease (White Population)',
    'title_es': 'Enfermedad Renal Crónica (Población Blanca)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 3.27, 'y_2017': 10.75},
    'geographies': [
      'tract',
    ],
  },
  'mCLINIC': {
    'metric': 'CLINIC',
    'category': 'Health',
    'suffix': '%',
    'title': 'Homes Near Health Care Clinics',
    'title_es': 'Viviendas cerca de clínicas de salud',
    'label': 'of households',
    'raw_label': 'homes near clinics',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mCOB': {
    'metric': 'COB',
    'category': 'Economy',
    'label': 'certificates per sq mi',
    'raw_label': 'certificates',
    'title': 'Commercial Certificates of Occupancy per Sq Mile',
    'title_es': 'Certificados de Ocupación Comercial por milla cuadrada',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mCOR': {
    'metric': 'COR',
    'category': 'Economy',
    'label': 'certificates per sq mi',
    'raw_label': 'certificates',
    'title': 'Residential Certificates of Occupancy per Sq Mile',
    'title_es': 'Certificados de Ocupación Residencial por milla cuadrada',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mCPMTS': {
    'metric': 'CPMTS',
    'category': 'Economy',
    'prefix': '$',
    'label': 'per sq mi',
    'raw_label': 'total dollars',
    'title': 'Commercial Building Permit Values Per Sq Mile',
    'title_es': 'Valores de los Permisos de Construcción Comercial por milla cuadrada',
    'decimals': 0,
    'type': 'weighted',
    'world_val': {
      y_2012: 953750.21,
      y_2013: 1557984.27,
      y_2014: 1129287.67,
      y_2015: 1064761.1,
      y_2016: 1619937.98,
      y_2017: 1842853.77,
      y_2018: 2155235.79,
      y_2019: 2369273.58,
    },
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mDRALONE': {
    'metric': 'DRALONE',
    'accuracy': 'true',
    'category': 'Environment',
    'title': 'Single-Occupancy Commuters',
    'title_es': 'Viaje al trabajo sin acompañantes',
    'suffix': '%',
    'raw_label': 'commuters',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'tract',
    ],
  },
  'mDIABETES_ASIAN': {
    'metric': 'DIABETES_ASIAN',
    'category': 'Health',
    'title': 'Diabetes (Asian Population)',
    'title_es': 'Diabetes (Población Asiática)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 8.32, 'y_2017': 7.81},
    'geographies': [
      'tract',
    ],
  },
  'mDIABETES_BLACK': {
    'metric': 'DIABETES_BLACK',
    'category': 'Health',
    'title': 'Diabetes (Black or African American Population)',
    'title_es': 'Diabetes (Población Afroamericana o Negra)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 18.99, 'y_2017': 18.36},
    'geographies': [
      'tract',
    ],
  },
  'mDIABETES_FEMALE': {
    'metric': 'DIABETES_FEMALE',
    'category': 'Health',
    'title': 'Diabetes (Female)',
    'title_es': 'Diabetes (Mujeres)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 12.36, 'y_2017': 12.04},
    'geographies': [
      'tract',
    ],
  },
  'mDIABETES_HISPANIC': {
    'metric': 'DIABETES_HISPANIC',
    'category': 'Health',
    'title': 'Diabetes (Hispanic or Latino/a Population)',
    'title_es': 'Diabetes (Población Hispana o Latina)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 13.95, 'y_2017': 13.25},
    'geographies': [
      'tract',
    ],
  },
  'mDIABETES_MALE': {
    'metric': 'DIABETES_MALE',
    'category': 'Health',
    'title': 'Diabetes (Male)',
    'title_es': 'Diabetes (Hombres)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 14.67, 'y_2017': 14.15},
    'geographies': [
      'tract',
    ],
  },
  'mDIABETES_TOTAL': {
    'metric': 'DIABETES_TOTAL',
    'category': 'Health',
    'title': 'Diabetes (Adult Population)',
    'title_es': 'Diabetes (Población Adulta)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 13.42, 'y_2017': 12.86},
    'geographies': [
      'tract',
    ],
  },
  'mDIABETES_WHITE': {
    'metric': 'DIABETES_WHITE',
    'category': 'Health',
    'title': 'Diabetes (White Population)',
    'title_es': 'Diabetes (Población Blanca)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 9.69, 'y_2017': 9.23},
    'geographies': [
      'tract',
    ],
  },
  'mD_SQM': {
    'metric': 'D_SQM',
    'category': 'Safety',
    'title': 'Drug Crimes per Square Mile',
    'title_es': 'Delitos relacionados con drogas por milla cuadrada',
    'label': 'incidents per sq mi',
    'raw_label': 'incidents',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  //  "mHEARTATTACK_ASIAN": {
  //   "metric": "HEARTATTACK_ASIAN",
  //    "category": "Health",
  //    "title": "Heart Attack (Asian Population)",
  //   "suffix":"%",
  //    "raw_label": "adults",
  //    "decimals": 1,
  //    "type": "weighted",
  //    "world_val": {"y_2015": 0.70,"y_2017":0.63},
  //    "geographies": [
  //      "tract"
  //        ]
  //  },
  'mHEARTATTACK_BLACK': {
    'metric': 'HEARTATTACK_BLACK',
    'category': 'Health',
    'title': 'Heart Attack (Black or African American Population)',
    'title_es': 'Ataque Cardíaco (Población Negra o Afroamericana)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 2.38, 'y_2017': 2.16},
    'geographies': [
      'tract',
    ],
  },
  'mHEARTATTACK_FEMALE': {
    'metric': 'HEARTATTACK_FEMALE',
    'category': 'Health',
    'title': 'Heart Attack (Female)',
    'title_es': 'Ataque Cardíaco (Mujeres)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 1.47, 'y_2017': 1.31},
    'geographies': [
      'tract',
    ],
  },
  //  "mHEARTATTACK_HISPANIC": {
  //    "metric": "HEARTATTACK_HISPANIC",
  //   "category": "Health",
  //   "title": "Heart Attack (Hispanic or Latino/a Population)",
  //   "suffix":"%",
  //    "raw_label": "adults",
  //    "decimals": 1,
  //    "type": "weighted",
  //   "world_val": {"y_2015": 0.47,"y_2017":0.43},
  //    "geographies": [
  //      "tract"
  //        ]
  //  },
  'mHEARTATTACK_MALE': {
    'metric': 'HEARTATTACK_MALE',
    'category': 'Health',
    'title': 'Heart Attack (Male)',
    'title_es': 'Ataque Cardíaco (Hombres)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 3.02, 'y_2017': 2.70},
    'geographies': [
      'tract',
    ],
  },
  'mHEARTATTACK_TOTAL': {
    'metric': 'HEARTATTACK_TOTAL',
    'category': 'Health',
    'title': 'Heart Attack (Adult Population)',
    'title_es': 'Ataque Cardíaco (Población Adulta)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 2.08, 'y_2017': 1.86},
    'geographies': [
      'tract',
    ],
  },
  'mHEARTATTACK_WHITE': {
    'metric': 'HEARTATTACK_WHITE',
    'category': 'Health',
    'title': 'Heart Attack (White Population)',
    'title_es': 'Ataque Cardíaco (Población Blanca)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 2.33, 'y_2017': 2.08},
    'geographies': [
      'tract',
    ],
  },
  'mHMINC': {
    'metric': 'HMINC',
    'category': 'Economy',
    'title': 'Median Homebuyer Income',
    'title_es': 'Mediana del Ingreso de los Compradores de Vivienda',
    'prefix': '$',
    'decimals': 0,
    'type': 'mean',
    'geographies': [
      'tract',
    ],
  },
  'mKWH': {
    'metric': 'KWH',
    'category': 'Environment',
    'title': 'Avg. Monthly Household Electricity Use',
    'title_es': 'Promedio Consumo mensual de electricidad por hogar',
    'suffix': ' kwh',
    'decimals': 1,
    'type': 'mean',
    'geographies': [
      'blockgroup',
    ],
  },
  'mLUDIV': {
    'metric': 'LUDIV',
    'category': 'Economy',
    'title': 'Land Use Diversity',
    'title_es': 'Diversidad en el Uso de la Tierra',
    'decimals': 1,
    'type': 'mean',
    'geographies': [
      'blockgroup',
    ],
  },
  'mMEANRPMT': {
    'metric': 'MEANRPMT',
    'category': 'Economy',
    'prefix': '$',
    'title': 'Average Residential Building Permit Value',
    'title_es': 'Promedio del Valor de los Permisos de Construcción Residencial',
    'decimals': 0,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mMEDAGE': {
    'metric': 'MEDAGE',
    'accuracy': 'true',
    'category': 'Demographics',
    'label': 'years',
    'title': 'Median Age',
    'title_es': 'Mediana de Edad',
    'decimals': 1,
    'type': 'mean',
    'geographies': [
     'tract',
      'blockgroup',
    ],
  },
  'mMEDGRENT': {
    'metric': 'MEDGRENT',
    'accuracy': 'true',
    'category': 'Housing',
    'title': 'Median Gross Rent',
    'title_es': 'Mediana del Arriendo Bruto',
    'prefix': '$',
    'decimals': 0,
    'type': 'weighted',
    'geographies': [
      'tract',
      'blockgroup',
    ],
  },
  'mMEDHV': {
    'metric': 'MEDHV',
    'category': 'Housing',
    'title': 'Median Home Value',
    'title_es': 'Mediana del Valor de Viviendas',
    'prefix': '$',
    'decimals': 0,
    'type': 'weighted',
    'geographies': [
      'tract',
    ],
  },
  'mMEDINC': {
    'metric': 'MEDINC',
    'accuracy': 'true',
    'category': 'Economy',
    'prefix': '$',
    'title': 'Median Household Income',
    'title_es': 'Mediana del Ingreso de los Hogares',
    'decimals': 0,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  //  "mMEDSV": {
  //  "metric": "MEDSV",
  //    "category": "Housing",
  //    "title": "Median Sale Price",
  //'title_es': 'TRANSLATE Median Sale Price',
  //    "prefix": "$",
  //    "decimals": 0,
  //    "type": "mean",
  //    "geographies": [
  //      "blockgroup"
  //    ]
  //  },
  'mPCI': {
    'metric': 'PCI',
    'accuracy': 'true',
    'category': 'Economy',
    'prefix': '$',
    'title': 'Per Capita Income',
    'title_es': 'Ingreso Per Cápita',
    'decimals': 0,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mPCTC30': {
    'metric': 'PCTC30',
    'accuracy': 'true',
    'category': 'Environment',
    'title': 'Long Commute Times',
    'title_es': 'Viaje al trabajo extenso',
    'suffix': '%',
    'raw_label': 'commuters',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'tract',
    ],
  },
  'mPCTIMP': {
    'metric': 'PCTIMP',
    'category': 'Environment',
    'title': 'Impervious Area',
    'title_es': 'Áreas Impermeables',
    'suffix': '%',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPCTRENT': {
    'metric': 'PCTRENT',
    'accuracy': 'true',
    'category': 'Housing',
    'title': 'Renter-Occupied Housing',
    'title_es': 'Vivienda Ocupada por Inquilinos',
    'suffix': '%',
    'raw_label': 'renter households',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPCTSSI': {
    'metric': 'PCTSSI',
    'accuracy': 'true',
    'category': 'Economy',
    'suffix': '%',
    'raw_label': 'people receiving SSI',
    'title': 'Supplemental Security Income',
    'title_es': 'Seguridad de Ingreso Suplementario',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'tract',
    ],
  },
  'mPCTTREE': {
    'metric': 'PCTTREE',
    'category': 'Environment',
    'title': 'Tree Coverage',
    'title_es': 'Cobertura arbórea',
    'suffix': '%',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPOP': {
    'metric': 'POP',
    'accuracy': 'true',
    'category': 'Demographics',
    'label': 'people',
    'title': 'Population',
    'title_es': 'Población',
    'decimals': 0,
    'type': 'sum',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mPOPDENS': {
    'metric': 'POPDENS',
    'category': 'Demographics',
    'label': 'people per sq mi',
    'title': 'Population Density',
    'title_es': 'Densidad de población',
    'decimals': 0,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPROXBANK': {
    'metric': 'PROXBANK',
    'category': 'Infrastructure and Amenities',
    'suffix': '%',
    'raw_label': 'households',
    'title': 'Homes Near Banks or Credit Unions',
    'title_es': 'Viviendas cerca de bancos y uniones de crédito',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPROXBUS': {
    'metric': 'PROXBUS',
    'category': 'Infrastructure and Amenities',
    'suffix': '%',
    'raw_label': 'households',
    'title': 'Homes Near Bus Stops',
    'title_es': 'Viviendas cerca de paradas de autobús',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPROXCF': {
    'metric': 'PROXCF',
    'category': 'Infrastructure and Amenities',
    'suffix': '%',
    'raw_label': 'households',
    'title': 'Homes Near Fast Food & Convenience Stores',
    'title_es': 'Viviendas cerca de locales de comida rápida y tiendas de conveniencia',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPROXGR': {
    'metric': 'PROXGR',
    'category': 'Infrastructure and Amenities',
    'suffix': '%',
    'raw_label': 'households',
    'title': 'Homes Near Grocery Stores',
    'title_es': 'Viviendas cerca de supermercados',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPROXPH': {
    'metric': 'PROXPH',
    'category': 'Infrastructure and Amenities',
    'suffix': '%',
    'raw_label': 'households',
    'title': 'Homes Near Pharmacies',
    'title_es': 'Viviendas cerca de farmacias',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPRUNSD': {
    'metric': 'PRUNSD',
    'category': 'Housing',
    'title': 'Poor or Unsound State of Repair',
    'title_es': 'Estado de Reparación Escaso y Defectuoso',
    'suffix': '%',
    'raw_label': 'dwelling units in poor or unsound state of repair',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPT65UP': {
    'metric': 'PT65UP',
    'category': 'Demographics',
    'title': 'Retirement-Age Population',
    'title_es': 'Población en Edad de Jubilación',
    'suffix': '%',
    'raw_label': 'people',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mPTASNL': {
    'metric': 'PTASNL',
    'accuracy': 'true',
    'category': 'Demographics',
    'suffix': '%',
    'raw_label': 'people',
    'title': 'Asian',
    'title_es': 'Asiático/a',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mPTBLKNL': {
    'metric': 'PTBLKNL',
    'accuracy': 'true',
    'category': 'Demographics',
    'suffix': '%',
    'raw_label': 'people',
    'title': 'Black or African American',
    'title_es': 'Negro o afroamericano',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mPTGNRL': {
    'metric': 'PTGNRL',
    'category': 'Civic Engagement',
    'title': 'General Election Participation',
    'title_es': 'Participación en Elecciones Generales',
    'suffix': '%',
    'raw_label': 'voters',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPTLAT': {
    'metric': 'PTLAT',
    'accuracy': 'true',
    'category': 'Demographics',
    'suffix': '%',
    'raw_label': 'people',
    'title': 'Hispanic/Latino',
    'title_es': 'Hispano/Latino',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mPTOTHNL': {
    'metric': 'PTOTHNL',
    'accuracy': 'true',
    'category': 'Demographics',
    'suffix': '%',
    'raw_label': 'people',
    'title': 'Other Race',
    'title_es': 'Otra raza',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPTPRIM': {
    'metric': 'PTPRIM',
    'category': 'Civic Engagement',
    'title': 'Primary Election Participation',
    'title_es': 'Participación en Elecciones Primarias',
    'suffix': '%',
    'raw_label': 'voters',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mPTUND18': {
    'metric': 'PTUND18',
    'category': 'Demographics',
    'title': 'Youth Population',
    'title_es': 'Población menor de 18 años',
    'suffix': '%',
    'raw_label': 'young people',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
	  'tract',
    ],
  },
  'mPTWHNL': {
    'metric': 'PTWHNL',
    'accuracy': 'true',
    'category': 'Demographics',
    'suffix': '%',
    'raw_label': 'people',
    'title': 'White or Caucasian',
    'title_es': 'Blanco o caucásico',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mP_SQM': {
    'metric': 'P_SQM',
    'category': 'Safety',
    'title': 'Property Crimes per Square Mile',
    'title_es': 'Delitos a la propiedad por milla cuadrada',
    'label': 'crimes per sq mi',
    'raw_label': 'crimes',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mRAVGYR': {
    'metric': 'RAVGYR',
    'category': 'Housing',
    'title': 'Average Year of Residential Construction',
    'title_es': 'Año Promedio de Construcción Residencial',
    'decimals': 0,
    'commas': false,
    'type': 'mean',
    'geographies': [
      'blockgroup',
    ],
  },
  'mRCODE': {
    'metric': 'RCODE',
    'category': 'Housing',
    'title': 'Minimum Housing Code Violations per Square Mile',
    'title_es': 'Violaciones al Código de Estándares Mínimos de Vivienda por milla cuadrada',
    'label': 'violations per sq mi',
    'raw_label': 'violations',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mREDIV': {
    'metric': 'REDIV',
    'category': 'Demographics',
    'title': 'Race/Ethnic Diversity',
    'title_es': 'Diversidad Racial/Étnica',
    'decimals': 2,
    'type': 'mean',
    'geographies': [
      'blockgroup',
    ],
  },
  'mREVAL': {
    'metric': 'REVAL',
    'category': 'Housing',
    'title': 'Tax Value Change',
    'title_es': 'Cambio de Valor Impositivo',
    'suffix': '%',
    'decimals': 1,
    'type': 'mean',
    'geographies': [
      'blockgroup',
    ],
  },
  'mRPMTS': {
    'metric': 'RPMTS',
    'category': 'Economy',
    'prefix': '$',
    'title': 'Residential Building Permit Value Per Sq Mile',
    'title_es': 'Promedio del Valor de los Permisos de Construcción Residencial por milla cuadrada',
    'label': 'per sq mi',
    'raw_label': 'total dollars',
    'decimals': 0,
    'world_val': {
      y_2012: 1358105.54,
      y_2013: 1569905.53,
      y_2014: 1252480.49,
      y_2015: 1558094.64,
      y_2016: 2087390.7,
      y_2017: 2398384.62,
      y_2018: 2376536.5,
      y_2019: 2514926.6,
    },
    'type': 'weighted',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  //  "mSTROKE_ASIAN": {
  //   "metric": "STROKE_ASIAN",
  //    "category": "Health",
  //    "title": "Stroke (Asian Population)",
  //   "suffix":"%",
  //    "raw_label": "adults",
  //    "decimals": 1,
  //    "type": "weighted",
  //    "world_val": {"y_2015": 1.22,"y_2017":1.21},
  //    "geographies": [
  //      "tract"
  //        ]
  //  },
  'mSTROKE_BLACK': {
    'metric': 'STROKE_BLACK',
    'category': 'Health',
    'title': 'Stroke (Black or African American Population)',
    'title_es': 'Accidente Cerebrovascular (Población Negra o Afroamericana)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 3.79, 'y_2017': 3.34},
    'geographies': [
      'tract',
    ],
  },
  'mSTROKE_FEMALE': {
    'metric': 'STROKE_FEMALE',
    'category': 'Health',
    'title': 'Stroke (Female)',
    'title_es': 'Accidente Cerebrovascular (Mujeres)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 2.89, 'y_2017': 2.45},
    'geographies': [
      'tract',
    ],
  },
  //  "mSTROKE_HISPANIC": {
  //    "metric": "STROKE_HISPANIC",
  //    "category": "Health",
  //    "title": "Stroke (Hispanic or Latino/a Population)",
  //   "suffix":"%",
  //    "raw_label": "adults",
  //    "decimals": 1,
  //    "type": "weighted",
  //   "world_val": {"y_2015": 0.82,"y_2017":0.65},
  //    "geographies": [
  //      "tract"
  //        ]
  //  },
  'mSTROKE_MALE': {
    'metric': 'STROKE_MALE',
    'category': 'Health',
    'title': 'Stroke (Male)',
    'title_es': 'Accidente Cerebrovascular (Hombres)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 3.78, 'y_2017': 3.23},
    'geographies': [
      'tract',
    ],
  },
  'mSTROKE_TOTAL': {
    'metric': 'STROKE_TOTAL',
    'category': 'Health',
    'title': 'Stroke (Adult Population)',
    'title_es': 'Accidente Cerebrovascular (Población Adulta)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 3.24, 'y_2017': 2.76},
    'geographies': [
      'tract',
    ],
  },
  'mSTROKE_WHITE': {
    'metric': 'STROKE_WHITE',
    'category': 'Health',
    'title': 'Stroke (White Population)',
    'title_es': 'Accidente Cerebrovascular (Población Blanca)',
    'suffix': '%',
    'raw_label': 'adults',
    'decimals': 1,
    'type': 'weighted',
    'world_val': {'y_2015': 3.52, 'y_2017': 2.95},
    'geographies': [
      'tract',
    ],
  },
  'mSUMEJECT': {
    'metric': 'SUMEJECT',
    'category': 'Housing',
    'title': 'Summary Ejectments Per Square Mile',
    'title_es': 'Órdenes de desalojo por milla cuadrada',
    'label': 'evictions per sq mi',
    'raw_label': 'evictions',
    'decimals': 0,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mSWTORD': {
    'metric': 'SWTORD',
    'category': 'Infrastructure and Amenities',
    'suffix': '%',
    'title': 'Sidewalks to Roadways',
    'title_es': 'Aceras a carreteras',
    'label': 'ratio of sidewalks to roadways',
    'decimals': 0,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mUNFOWN': {
    'metric': 'UNFOWN',
    'accuracy': 'true',
    'category': 'Housing',
    'title': 'Cost-Burdened Mortgage Holders',
    'title_es': 'Hogares con demasiados costos',
    'suffix': '%',
    'raw_label': 'households',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mUNFRENT': {
    'metric': 'UNFRENT',
    'accuracy': 'true',
    'category': 'Housing',
    'title': 'Cost-Burdened Renters',
    'title_es': 'Arrendatarios con demasiados costos',
    'suffix': '%',
    'raw_label': 'renter households',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
      'tract',
    ],
  },
  'mVCODE': {
    'metric': 'VCODE',
    'category': 'Environment',
    'title': 'Automotive Code Violations',
    'title_es': 'Violaciones al Código de Automóviles',
    'label': 'violations per sq mi',
    'raw_label': 'violations',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mV_SQM': {
    'metric': 'V_SQM',
    'category': 'Safety',
    'title': 'Violent Crimes per Square Mile',
    'title_es': 'Delitos violentos por milla cuadrada',
    'label': 'incidents per sq mi',
    'raw_label': 'incidents',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mWCODE': {
    'metric': 'WCODE',
    'category': 'Environment',
    'title': 'Unmaintained Property Violations per Sq Mile',
    'title_es': 'Violaciones por Propiedades No Mantenidas por milla cuadrada',
    'label': 'violations per sq mi',
    'raw_label': 'violations',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'blockgroup',
    ],
  },
  'mWKHOME': {
    'metric': 'WKHOME',
    'accuracy': 'true',
    'category': 'Infrastructure and Amenities',
    'suffix': '%',
    'raw_label': 'people',
    'title': 'Working from Home',
    'title_es': 'Trabajo desde la Vivienda',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'tract',
    ],
  },
  'mWLKWK': {
    'metric': 'WLKWK',
    'accuracy': 'true',
    'category': 'Infrastructure and Amenities',
    'suffix': '%',
    'raw_label': 'people',
    'title': 'Walking to Work',
    'title_es': 'Ir al Trabajo Caminando',
    'decimals': 1,
    'type': 'weighted',
    'geographies': [
      'tract',
    ],
  },
};
