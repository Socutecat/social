import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class AuthService {
    login(email, password) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/login`, {email, password})
                .then((response) => {
                    if (!response.auth) return reject(response); 
                    localStorage.setItem('sn_user_id', response.id);
                    localStorage.setItem('sn_user_token', response.token);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }

    signUp({email, password, nickName, fName, lName, phone, gender, city, country, birthDay, birthMonth, birthYear}) {
        return new Promise((resolve, reject) => {
            fetch(`${env.apiUrl}/public/auth/signup`, {
                method: "POST",
                body: JSON.stringify({
                    email, 
                    password,
                    nickname: nickName,
                    first_name: fName,
                    last_name: lName,
                    phone,
                    gender_orientation: gender,
                    city,
                    country,
                    date_of_birth_day: birthDay,
                    date_of_birth_month: birthMonth,
                    date_of_birth_year: birthYear
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }
}
