import { useEffect, useState } from "react";


export default function Contact(props) {
  const [owner, setOwner] = useState(null);


  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const res = await fetch(`/api/user/${props.listing.userRef}`);
        const data = await res.json();

        setOwner(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOwner();
  }, [props.listing.userRef]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {owner && (
        <div className="flex flex-col gap-2">
          <p>
            Contact: <span className="font-semibold">{owner.username}</span> for{" "}
            <span className="font-semibold">{props.listing.name}</span>
          </p>
         
        </div>
      )}
    </>
  );
}
