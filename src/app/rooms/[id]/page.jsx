
import BookingModal from '@/components/BookingModal';
import { DeleteRoom } from '@/components/DeleteRoom';
import { EditModal } from '@/components/EditModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import Image from 'next/image';

const RoomDetailsPage = async ({ params }) => {
    const { id } = await params;
    // const token = await auth.api.getToken({
    //     headers: await headers()
    // })  
    // console.log(token); 
        
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/room/${id}`, {
        // headers: {
        //     authorization: `Bearer ${token}`
        // }
    });

//     if (!res.ok) {
//   const errorText = await res.text();
//   console.log(errorText);

//   throw new Error("API request failed");
// }

    const room = await res.json();      
    


    const { imageUrl, roomName, description, floor, seat, amenities, price } = room;
    // const selectedAmenities = amenities.map(item => item.toString());

    return (
        <div className='flex flex-col items-center gap-5 shadow-sm max-w-7xl mx-auto'>  
            <div className="p-4">
                {imageUrl ? (<Image
                    alt={roomName}
                    src={imageUrl}
                    height={500}
                    width={600}
                    className="w-full object-cover"
                />) : null}
            </div>
            <div className='w-[70vh] p-2 space-y-3'>
                <h2 className="text-xl font-bold">Name: {roomName}</h2>
                <p className='line-clamp-2'>Description: {description}</p>

                <p className="text-lg">Floor: {floor} floor</p>
                <p className="font-medium">Seat capacity: {seat} people</p>

                <p className="text-lg font-medium">Hourly rate: $ {price}/hr</p>
                <div className="flex items-center gap-2">Amenities: {JSON.stringify(amenities, null, 2)}                    

                    <span className="text-green-500">+2 more</span>
                </div>
                <div className='flex justify-start items-center gap-2'>
                   
                    <BookingModal 
                    roomName={room.roomName}
                    imageUrl={room.imageUrl} 
                    hourlyRate={room.price}
                    roomId={room._id}/>
                    
                   <EditModal room={room}/>
                   <DeleteRoom room={room}/>
                    
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsPage;