// src/components/Challenges.jsx
import { useEffect, useState } from "react";
import apiClient from "../api/client";

// /deployer
//@app.post("/")
//def create_instance(x_token: Annotated[str, Header()], data: Data):
    //payload = None
    //try:
        //with open(PUBLIC_KEY_PATH, 'r') as f:
            //public_key = f.read()
            //payload = decode(x_token, public_key, algorithms=['RS256'])
    //except Exception as e:
        //raise HTTPException(status_code=401, detail="Invalid token")
    //user_id = payload["id"]
    //image_id = data.challenge_id
    //kube.create_in_k8s(db=db, user_id=user_id, challenge_id=image_id)
    //r.create_instance(user_id=user_id, image_id=image_id)
    //return {"status": "success"}

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      const response = await apiClient.get("/lister/");
      setChallenges(response.data);
    };

    fetchChallenges();
  }, []);
  const startChallenge = async (challengeId) => {
    try {
      const response = await apiClient.post("/deployer/", { challenge_id: challengeId });
      if (response.data.status === "success") {
        alert(`Challenge ${challengeId} started successfully!`);
      } else {
        alert(`Failed to start challenge ${challengeId}`);
      }
    } catch (error) {
      console.error("Error starting challenge:", error);
      alert(`Error starting challenge ${challengeId}`);
    }
  };

  return (
    <div>
      <h2>Challenges</h2>
      <ul>
        {/* List challenges and button to start it */}
        {Object.entries(challenges).map(([id, name]) => (
          <li key={id}>
            {`${id}: ${name}`}
            <button onClick={() => startChallenge(id)}>Start</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

