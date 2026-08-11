import {CONFIG} from "./config.js";import {buildSamples,vector} from "./features.js";import {fitRidge,metrics} from "./regression.js";
export function trainAndPredict(rows){
 if(rows.length<80)throw Error("At least 80 valid daily rows are recommended.");
 const samples=buildSamples(rows,1);if(samples.length<60)throw Error("Not enough usable rows after feature engineering.");
 const split=Math.floor(samples.length*CONFIG.trainRatio),train=samples.slice(0,split),test=samples.slice(split);
 const holdoutModel=fitRidge(train.map(s=>s.x),train.map(s=>s.y),CONFIG.ridgeAlpha);
 const pred=test.map(s=>holdoutModel.predict(s.x)),m=metrics(test.map(s=>s.y),pred);
 const finalModel=fitRidge(samples.map(s=>s.x),samples.map(s=>s.y),CONFIG.ridgeAlpha);
 const latestX=vector(rows,rows.length-1),last=rows[rows.length-1],forecast=finalModel.predict(latestX);
 const forecastDate=new Date(last.date);forecastDate.setDate(forecastDate.getDate()+1);
 return {model:finalModel,metrics:m,prediction:{lastClose:last.close,predictedClose:forecast,direction:forecast>=last.close?"UP":"DOWN",date:last.date,forecastDate},samples,test,pred}
}