import { useRouter } from 'next/router'

export default function RoomDetails() {
  const router = useRouter()
  const { id } = router.query;
  console.log('ROOM ID', id);
  
  return <div className="p-24 bg-white h-screen">
    <p>Details...</p>
  </div>;
}
