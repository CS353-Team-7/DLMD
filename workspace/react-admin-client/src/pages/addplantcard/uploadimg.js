import React, {Component} from 'react';
import {v4 as uuid} from 'uuid'
import fire from "../../api/commonFirebase";
import { Image } from 'antd';
import memoryUtils from "../../utils/memoryUtils";

export default class PicturesWall extends React.Component {
    state = {
        imageUrl:null,
        dis:false,
    }
    getImgUrl = ()=>{
        return this.state.imageUrl
    }




    render() {
        let imageUrl = null;
        const readImages = async (e)=>{
            const id = uuid()
            const file = e.target.files[0]
            const imagesRef = fire.storage().ref("images").child(id)
            await imagesRef.put(file);
            imagesRef.getDownloadURL().then((url)=>{
                console.log(url)
                this.setState({imageUrl:url})
                this.setState({dis:true})
                memoryUtils.imgUrl = url;
            })

            console.log(file)
        }
        return (
            <div>
                <input disabled={this.state.dis} type="file" accept="image/*"onChange={readImages}/>
                <Image
                    width={200}
                    src={this.state.imageUrl}
                />
            </div>
        )
    }
}

