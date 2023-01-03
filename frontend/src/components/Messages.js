"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Message = ({ message }) => {
    return (<div>
            <strong>
                Subject: 
            </strong>
                {message.subject} <br></br>
            <strong>
                Message:
            </strong>
                {message.message}
                <br></br>
            
        </div>);
};
exports.default = Message;
