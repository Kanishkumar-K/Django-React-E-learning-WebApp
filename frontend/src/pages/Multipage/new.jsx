import React from 'react';
import { useForm } from 'react-hook-form';

export default function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Please enter a valid email address</span>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password", { required: true, minLength: 6 })} />
        {errors.password && <span>Password must be at least 6 characters long</span>}
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
