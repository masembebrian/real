from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class PropertyImageBase(BaseModel):
    url: str
    is_primary: bool = False

class PropertyImage(PropertyImageBase):
    id: int
    property_id: int

    class Config:
        orm_mode = True

class PropertyBase(BaseModel):
    title: str
    description: str
    price: float
    location: str
    bedrooms: int
    bathrooms: int
    area_sqft: float

class PropertyCreate(PropertyBase):
    pass

class Property(PropertyBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: datetime
    images: List[PropertyImage] = []

    class Config:
        orm_mode = True
