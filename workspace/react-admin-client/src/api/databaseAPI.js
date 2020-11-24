import fire from "./commonFirebase";
import storageUtils from "../utils/storageUtils";
import memoryUtils from "../utils/memoryUtils";
export default {
    writeUserPlant(userId,plantName) {
        var user = memoryUtils.username;
        fire.database().ref('users/' + userId).set({
            ID: user,
            UserPlant: plantName
        });
    },
    //Get the name of the plant that the current user likes
    queryCollectionPlant()
    {
        var user = memoryUtils.username;
        var ref = fire.database().ref("users");
        var arry ={};

        ref.orderByChild("ID").equalTo(user).on("child_added", function(snapshot) {
            arry = snapshot.toJSON();
        });
        return arry
    },


}
