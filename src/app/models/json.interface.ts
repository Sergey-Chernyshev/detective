export interface ServiceDetail {
  name: string;
  description: string;
  details: string[];
  id?: number; // id может быть необязательным полем
  price: string;
  preview: boolean;
}

export interface ServiceCategory {
  name: string;
  services: ServiceDetail[];
}

export interface ServicesForIndividuals {
  categories: ServiceCategory[];
}

export interface ServicesForLegalEntities {
  name: string;
  categories: ServiceCategory[];
}

export interface ServicesDataInterface {
  services:
{
  individuals: ServicesForIndividuals;
  legal_entities: ServicesForLegalEntities;
}
}




export interface WhyWeItem {
  data: {
    title: string;
    description: string;
  }[];
}
