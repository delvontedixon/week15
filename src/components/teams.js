class Teams {
  constructor(name) {
    this.name = name;
    this.rooms = [];
  }

  addPlayer(name, area) {
    this.player.push(new Player(name, area));
  }
}

class Player {
  constructor(name, area) {
    this.name = name;
    this.area = area;
  }
}

function Teams() {
  const COMMENTS_ENDPOINT = "https://65b923cbb71048505a8a4706.mockapi.io/teams";
  // NOTE GET request from the API or local json file
  const getComments = async () => {
    console.log("getting comment data from mockapi...");

    try {
      const response = await fetch(COMMENTS_ENDPOINT); // url you want get data from
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resp = await response.json(); // parsing the response as JSON
      return resp;
    } catch (error) {
      console.log(
        "Oh no! There was an error with getting your comment.",
        error
      );
    }
  };

  // NOTE POST requests from the API or local json file
  const postComment = async (commentData) => {
    console.log("posting comment", commentData);
    try {
      const response = await fetch(COMMENTS_ENDPOINT, {
        // url you want to post to
        method: "POST", // type of request
        headers: {
          "Content-Type": "application/json", // type of data sent to the server
        },
        body: JSON.stringify({ commentName: commentData }), // data you want to update
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resp = await response.json(); // parsing the response as JSON
      return resp;
    } catch (error) {
      console.log(
        "Oh no! There was an error with posting your comment.",
        error
      );
    }
  };

  // NOTE PUT request from the API or local json file
  const updateComment = async (commentData, commentId) => {
    console.log("updating comment", commentData);
    try {
      const response = await fetch(COMMENTS_ENDPOINT + `/${commentId}`, {
        // url + id you want to update
        method: "PUT", // type of request
        headers: {
          "Content-Type": "application/json", // type of data sent to the server
        },
        body: JSON.stringify({ commentName: commentData }), // data you want to update
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resp = await response.json(); // parsing the response as JSON
      return resp;
    } catch (error) {
      console.log(
        "Oh no! There was an error with updating your comment.",
        error
      );
    }
  };

  // NOTE DELETE request from the API or local json file
  const deleteComment = async (commentId) => {
    console.log("deleting comment", commentId);
    try {
      const response = await fetch(COMMENTS_ENDPOINT + `/${commentId}`, {
        // url + id you want to delete
        method: "DELETE", // type of request
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response; // The DELETE request might not return a JSON response
    } catch (error) {
      console.log(
        "Oh no! There was an error with deleting your comment.",
        error
      );
    }
  };
}

export default Teams;
