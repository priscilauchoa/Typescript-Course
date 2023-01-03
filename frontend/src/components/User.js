"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const User = ({ user }) => {
    return (<div>
            <strong>
                Name: 
            </strong>
                {user.name} <br></br>
            <strong>
                E-mail:
            </strong>
                {user.email}
                <br></br>
            
        </div>);
};
exports.default = User;
