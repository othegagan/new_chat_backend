"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chatHistory_route_1 = require("./routes/chat/chatHistory.route.js");
const createConversation_route_1 = __importDefault(require("./routes/chat/createConversation.route.js"));
const getAllChatAssets_route_1 = __importDefault(require("./routes/chat/getAllChatAssets.route.js"));
const getClientAccessToken_route_1 = __importDefault(require("./routes/chat/getClientAccessToken.route.js"));
const getHostAccessToken_route_1 = __importDefault(require("./routes/chat/getHostAccessToken.route.js"));
const message_route_1 = require("./routes/chat/message.route.js");
const copyTuroVehicleData_route_1 = require("./routes/turo/copyTuroVehicleData.route.js");
const webhook_route_1 = __importDefault(require("./routes/webhook/webhook.route.js"));
// This file is used to export all routes
const express_1 = require("express");
const insurance_route_1 = __importDefault(require("./routes/insurance/insurance.route.js"));
const firebaseUser_route_1 = require("./routes/others/firebaseUser.route.js");
const getVehicleSpecificDates_route_1 = __importDefault(require("./routes/others/getVehicleSpecificDates.route.js"));
const latLongToZipCodes_1 = require("./routes/others/latLongToZipCodes.js");
const timeConversion_route_1 = __importDefault(require("./routes/others/timeConversion.route.js"));
const mainRouter = (0, express_1.Router)();
// Chat
mainRouter.use('/createConversation', createConversation_route_1.default);
mainRouter.use('/getAllChatAssets', getAllChatAssets_route_1.default);
mainRouter.use('/getHostAccessToken', getHostAccessToken_route_1.default);
mainRouter.use('/getClientAccessToken', getClientAccessToken_route_1.default);
mainRouter.use('/clientSendMessage', message_route_1.clientSendMessageRouter);
mainRouter.use('/hostSendMessage', message_route_1.hostSendMessageRouter);
mainRouter.use('/systemSendMessage', message_route_1.systemSendMessageRouter);
mainRouter.use('/clientSendMessageFlux', message_route_1.clientSendMessageFluxRouter);
mainRouter.use('/getAllChatHistory', chatHistory_route_1.getAllChatHistoryRouter);
mainRouter.use('/getAllChatHistoryFlux', chatHistory_route_1.getAllChatHistoryFluxRouter);
// Turo
mainRouter.use('/copyTuroVehicleData', copyTuroVehicleData_route_1.copyTuroVehicleDataRouter);
mainRouter.use('/copyTuroVehicleDataServerless', copyTuroVehicleData_route_1.copyTuroVehicleDataServerlessRouter);
// Firebase user management
mainRouter.use('/createUser', firebaseUser_route_1.createUserRouter);
mainRouter.use('/updateUser', firebaseUser_route_1.updateUserRouter);
mainRouter.use('/getUserByEmail', firebaseUser_route_1.getUserByEmailRouter);
mainRouter.use('/verifyUserToken', firebaseUser_route_1.verfiyUserTokenRouter);
// Time Conversion
mainRouter.use('/api/v1/timeConversions', timeConversion_route_1.default);
mainRouter.use('/getVehicleSpecificDates', getVehicleSpecificDates_route_1.default);
mainRouter.use('/api/v1/availability/getZipCode', latLongToZipCodes_1.getZipCodeRouter);
mainRouter.use('/api/v1/availability/getByZipCode', latLongToZipCodes_1.getByZipCodeRouter);
// Insurance
mainRouter.use('/webhook', webhook_route_1.default);
mainRouter.use('/api/v1/createNewIndividual', insurance_route_1.default);
exports.default = mainRouter;
//# sourceMappingURL=mainRouter.js.map