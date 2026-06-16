'use client'
import Amenities from '@/components/Amenities';
import { Button, Card, FieldError, Input, Label, ListBox, TextArea, Select, TextField, Checkbox } from '@heroui/react';
// import { redirect } from 'next/navigation';

import React, { useState } from 'react';
// // import { toast } from 'react-toastify';

const amenitiesList = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
];


const AddRoomPage = () => {
    
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const room = Object.fromEntries(formData.entries())
        room.amenities = selectedAmenities;
        console.log(room);

       const res = await fetch('http://localhost:5000/room', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(room)
        })

        const data = await res.json()
        console.log(data);
        // toast.success("Room added successfully")
        // redirect('/rooms');
    };

    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const handleAmenityChange = (value, checked) => {
        if (checked) {
            setSelectedAmenities((prev) => [...prev, value]);
        } else {
            setSelectedAmenities((prev) =>
                prev.filter((item) => item !== value)
            );
        }

    };
    

    return (        
        <div className='max-w-7xl mx-auto p-5'>
            <h2 className='text-2xl font-bold text-[#2D3748] text-center'>Add Room</h2>
            <Card>                
                <form onSubmit={onSubmit} className="p-10 space-y-5 w-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-2xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                        <div className="md:col-span-2">
                            <TextField name="roomName" isRequired>
                                <Label>Room Name</Label>
                                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-3xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="floor" isRequired>
                            <Label>Floor</Label>
                            <Input placeholder="2nd Floor" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                        <TextField name="seat" type="number" isRequired>
                            <Label>Seat capacity</Label>
                            <Input
                                type="number"
                                placeholder="2-4 people"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                        <TextField name="price" type="number" isRequired>
                            <Label>Hourly rate (USD)</Label>
                            <Input
                                type="number"
                                placeholder="$ 5"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                    {/* Amenities - Select Component */}
                    <Amenities 
                    selectedAmenities={selectedAmenities}
                    handleAmenityChange={handleAmenityChange}
                    />
                  
                    <Button
                        type="submit"
                        variant="outline"
                        className=" rounded-none w-3/4 bg-cyan-500 text-white">
                        Add Room
                    </Button>

                </form>

            </Card>
        </div>
    );
};

export default AddRoomPage;