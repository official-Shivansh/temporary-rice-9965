import React, { useState } from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { BiErrorCircle, BiHide, BiShow } from "react-icons/bi";
import { url } from "../components/url";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { login } from "../redux/reducers/authReducer/action";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const Nav = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleSubmitForm = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    setLoading(true);
    await axios.post(`${url}/users/login`, userData).then((res) => {
      if (res.data.auth) {
        toast({
          title: `${res.data.message}`,
          status: "success",
          position: "top-center",
          duration: 2000,
          isClosable: true,
        });
        dispatch(login(res.data));
        localStorage.setItem("user", JSON.stringify(res.data.user),
          localStorage.setItem("token", JSON.stringify(res.data.token))
        )
        setLoading(false);
        setTimeout(() => {
          Nav("/");
        }, 1500);
      } else {
        toast({
          title: `${res.data.message}`,
          status: "error",
          position: "top-center",
          duration: 2000,
          isClosable: true,
        });
        setLoading(false);
      }
    });
  };
  return (
    <Div>
      <div>
        <h1>Sign in</h1>
        <p>
          New user? <Link to="/register">Create an account</Link>
        </p>
        <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
          <label htmlFor="email">email address</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors?.email?.type === "required" && (
            <p>
              <BiErrorCircle /> This field is required
            </p>
          )}
          {errors?.email?.type === "pattern" && (
            <p>
              <BiErrorCircle /> Invalid email address
            </p>
          )}
          <label htmlFor="password">password</label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
            />
            <p onClick={handleToggleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </p>
          </div>
          {errors?.password?.type === "required" && (
            <p>
              <BiErrorCircle /> This field is required
            </p>
          )}
          {errors?.password?.type === "minLength" && (
            <p>
              <BiErrorCircle /> Password must be 8 characters
            </p>
          )}
          <button type="submit">
            {loading ? (
              <AiOutlineLoading className="infinity-rotation" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </Div>
  );
};
const Div = styled.div`
  background-image: url("https://www.pixelstalk.net/wp-content/uploads/2016/11/Earth-From-Space-HD-Backgrounds.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
  font-family: candara;
  > div {
    background-color: white;
    height: 90vh;
    width: 35%;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-30%, -50%);
    border-radius: 5px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    h1 {
      font-size: 40px;
      font-weight: bolder;
    }
    a {
      color: #14a3f1;
    }
    form {
      display: flex;
      flex-direction: column;
      label {
        margin-top: 20px;
        color: #747474;
        font-weight: bold;
        font-size: 14px;
        text-transform: capitalize;
      }
      input {
        outline: none;
        border-bottom: 1px solid lightgray;
        &:focus {
          border-bottom: 2px solid blue;
        }
      }
      > p {
        display: flex;
        align-items: center;
        gap: 5px;
        color: red;
        font-size: small;
      }
      div {
        display: flex;
        justify-content: space-between;
        input[type="password"] {
          width: 100%;
        }
        p {
          font-size: larger;
          color: #747474;
          cursor: pointer;
        }
      }
      button {
        color: white;
        background-color: black;
        padding: 9px 15px;
        font-size: large;
        width: 100px;
        margin: auto;
        font-weight: bold;
        border-radius: 10px;
        margin-top: 20px;
        @-webkit-keyframes rotating {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
          }
        }
        .infinity-rotation {
          -webkit-animation: rotating 1s linear infinite;
          font-size: large;
          font-weight: bold;
          margin: auto;
        }
      }
    }
  }
  @media screen and (min-width: 866px) and (max-width: 1024px) /* Laptop */ {
    > div {
      width: 40%;
      padding: 20px 30px 30px 30px;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 865px) /* Tablet */ {
    background-size: 125%;
    > div {
      width: 60%;
      padding: 20px 30px 30px 30px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media screen and (max-width: 480px) /* Mobile */ {
    background-size: 300%;
    > div {
      height: max-content;
      width: 95%;
      padding: 20px 30px 30px 30px;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        font-size: 30px;
      }
    }
  }
`;
export default LoginPage;
