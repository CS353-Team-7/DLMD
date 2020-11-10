/*
* Contains N request interface function modules
* */
import ajax from './ajax'

//login
export const reqLogin = (username,password) => ajax('./Login',{username,password},'POST')

//Registered users
export const reqRegister = (username,password,email) => ajax('./Login',{username,password,email},'POST')