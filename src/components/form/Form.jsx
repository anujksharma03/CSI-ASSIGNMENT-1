import React, { useState, useEffect } from "react";
import "./Form.css";
import { useNavigate } from 'react-router-dom';

const countryCityMap = {
    India: ["Mumbai", "Delhi", "Bangalore"],
    USA: ["New York", "Los Angeles", "Chicago"],
    UK: ["London", "Manchester", "Birmingham"]
};

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        countryCode: "",
        country: "",
        city: "",
        pan: "",
        aadhar: ""
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (formData.country) {
            setCities(countryCityMap[formData.country]);
            setFormData(prev => ({ ...prev, city: "" }));
        } else {
            setCities([]);
        }
    }, [formData.country]);


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        console.log(isFormValid);
        const newErrors = {};

        for (const field in formData) {
            if (!formData[field]) {
                newErrors[field] = "This field is required";
            }
        }
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        if (formData.pan && !panRegex.test(formData.pan)) {
            newErrors.pan = "Invalid PAN number";
        }

        const aadharRegex = /^[2-9]{1}[0-9]{11}$/;
        if (formData.aadhar && !aadharRegex.test(formData.aadhar)) {
            newErrors.aadhar = "Invalid Aadhar number";
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (formData.password && !passwordRegex.test(formData.password)) {
            newErrors.password = "Password must contain at least 1 letter, 1 number, and 8 characters";
        }

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
        
        handleSubmit();
    };

    const handleSubmit = () => {
        if (isFormValid) {
            navigate('/success');
        }
    };

    return (
        <div className="form-element">
            <h1>Form Validation Project</h1>
            <form onSubmit={handleSubmit}>
                <input id="firstName" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <span>{errors.firstName}</span>}
                
                <input id="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <span>{errors.lastName}</span>}
                
                <input id="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} />
                {errors.username && <span>{errors.username}</span>}
                
                <input id="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
                
                <input id="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                {errors.password && <span>{errors.password}</span>}
                
                <div>
                    <select id="countryCode" value={formData.countryCode} onChange={handleChange}>
                        <option value="">Select Country Code</option>
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                    </select>
                    <input id="phone" type="tel" placeholder="Phone No." value={formData.phone} onChange={handleChange} />
                </div>
                {errors.phone && <span>{errors.phone}</span>}
                
                <select id="country" value={formData.country} onChange={handleChange}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                {errors.country && <span>{errors.country}</span>}
                
                <select id="city" value={formData.city} onChange={handleChange} disabled={!formData.country}>
                    <option value="">Select City</option>
                    {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
                {errors.city && <span>{errors.city}</span>}
                
                <input id="pan" type="text" placeholder="Pan No." value={formData.pan} onChange={handleChange} />
                {errors.pan && <span>{errors.pan}</span>}
                
                <input id="aadhar" type="text" placeholder="Aadhar No." value={formData.aadhar} onChange={handleChange} />
                {errors.aadhar && <span>{errors.aadhar}</span>}

                <button className={isFormValid?"enabled":"disabled"} onClick={validateForm} type="button">
                    {isFormValid?"Submit":"Check"}
                </button>
            </form>
        </div>
    );
};

export default Form;
