import RoomCard from "@/components/RoomCard";


const AllRoomsPage = async () => {
    const res = await fetch('http://localhost:5000/room')
    const rooms = await res.json()

    

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-[#2D3748]">All Rooms</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    rooms.slice(0, 9).map(room => <RoomCard key={room._id} room={room}/>)
                }
            </div>
        </div>
    );
};

export default AllRoomsPage;