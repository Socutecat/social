import { AuthService } from './../services/auth.service';

export class SignupComponent {
	constructor () {
		this._authService = new AuthService(); 
	}
	render() {
        return `
		<div class="auth-wrap d-flex mt-3 mt-md-5 px-2">
        <div class="auth-form col-xs-12 col-md-6 mx-auto my-auto">
            <h3>Sign Up to Social.</h3>
            <p class="text-secondary">Enter your info.</p>
            <form name="signUpForm" novalidate>
                <div class="form-group">
                    <div class="row">
                        <div class="col col-6">
                            <input type="text" class="form-control form-control-sm" id="first_name" placeholder="First Name" required data-pattern="^[A-ZА-ЯЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$">
                        </div>
                        <div class="col col-6">
                            <input type="text" class="form-control form-control-sm" id="last_name" placeholder="Last Name" required data-pattern="^[A-ZА-ЯЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$">
                        </div>
                    </div>

                    <input type="text" class="form-control form-control-sm mt-3" id="nick_name" placeholder="Nick Name" required data-pattern="^[a-zA-Z0-9_-]{3,16}$">

                    <div class="row mt-3">
                        <div class="col col-4">
                            <input type="text" class="form-control form-control-sm" id="day_of_birth" placeholder="Day" required data-pattern="0[1-9]|1[0-9]|2[0-9]|3[01]">
                        </div>
                        <div class="col col-4">
                            <input type="text" class="form-control form-control-sm" id="month_of_birth" placeholder="Month" required data-pattern="0[1-9]|1[012]">
                        </div>
                        <div class="col col-4">
                            <input type="text" class="form-control form-control-sm" id="year_of_birth" placeholder="Year" required data-pattern="^[0-9]{4}">
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col col-6">
                            <input type="text" class="form-control form-control-sm" id="country" placeholder="Country" required data-pattern="^[A-ZА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$">
                        </div>
                        <div class="col col-6">
                            <input type="text" class="form-control form-control-sm" id="city" placeholder="City" required data-pattern="^[A-ZА-ЯЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$">
                        </div>
                    </div>

                    <select name="gender" id="gender" class="form-control form-control-sm mt-3">
                        <option value="male">Male</option>
                        <option value="male">Female</option>
                    </select>

                    <input type="email" class="form-control form-control-sm mt-3" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                    <input type="text" class="form-control form-control-sm mt-3" id="phone" placeholder="Phone number" required data-pattern="\+38\(\d{3}\)\d{3}-\d{2}-\d{2}">
                    <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="^[a-zA-Z0-9_-]{6,18}$">
                    <div class="d-flex mt-5">
                        <button type="submit" class="btn btn-primary btn-sm">Sign Up</button>
        `;
	}
	afterRender() {
        document.forms['signUpForm'].addEventListener('submit', (e) => {

            e.preventDefault();

 

            const email = e.target.elements["email"].value;

            const password = e.target.elements["password"].value;

            const nickName = e.target.elements["nick_name"].value;

            const fName = e.target.elements["first_name"].value;

            const lName = e.target.elements["last_name"].value;

            const phone = e.target.elements["phone"].value;

            const gender = e.target.elements["gender"].value;

            const city = e.target.elements["city"].value;

            const country = e.target.elements["country"].value;

            const birthDay = e.target.elements["day_of_birth"].value;

            const birthMonth = e.target.elements["month_of_birth"].value;

            const birthYear = e.target.elements["year_of_birth"].value;

 

            const regData = {

                email: email,

                password: password,

                nickName: nickName,

                fName: fName,

                lName: lName,

                phone: phone,

                gender: gender,

                city: city,

                country: country,

                birthDay: birthDay,

                birthMonth: birthMonth,

                birthYear: birthYear

            };

 

            this._authService.signUp(regData)

            .then((res) => {

                if (!res.error) {               

                    console.log(res.message);

                } else {

                    console.error(res.message);

                }

            })

            .catch((err) => {

                console.log(err);

            });            

        });

    }
}