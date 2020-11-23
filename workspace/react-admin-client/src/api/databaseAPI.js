import fire from "./commonFirebase";
import storageUtils from "../utils/storageUtils";
export default {
    writeUserPlant(userId,plantName) {
        var user = storageUtils.getUser();
        fire.database().ref('users/' + userId).set({
            ID: user.uid,
            UserPlant: plantName
        });
    },
    //Get the name of the plant that the current user likes
    queryCollectionPlant()
    {
        var user = storageUtils.getUser();
        var ref = fire.database().ref("users");
        ref.orderByChild("ID").equalTo(user.uid).on("child_added", function(snapshot) {
            var arry = snapshot.toJSON()
            console.log(arry);
        });
    },


}
