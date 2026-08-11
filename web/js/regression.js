import {mean,std} from "./utils.js";
function tr(A){return A[0].map((_,j)=>A.map(r=>r[j]))}
function mm(A,B){const bt=tr(B);return A.map(r=>bt.map(c=>r.reduce((s,v,k)=>s+v*c[k],0)))}
function inv(A){const n=A.length,M=A.map((r,i)=>[...r,...Array.from({length:n},(_,j)=>i===j?1:0)]);
for(let i=0;i<n;i++){let k=i;for(let j=i+1;j<n;j++)if(Math.abs(M[j][i])>Math.abs(M[k][i]))k=j;if(Math.abs(M[k][i])<1e-12)throw Error("Model matrix is singular.");
[M[i],M[k]]=[M[k],M[i]];const d=M[i][i];M[i]=M[i].map(v=>v/d);
for(let j=0;j<n;j++)if(j!==i){const f=M[j][i];M[j]=M[j].map((v,c)=>v-f*M[i][c])}}
return M.map(r=>r.slice(n))}
export function fitRidge(X,y,alpha=1){
 const mu=X[0].map((_,j)=>mean(X.map(r=>r[j]))),sd=X[0].map((_,j)=>std(X.map(r=>r[j]))||1);
 const Z=X.map(r=>r.map((v,j)=>(v-mu[j])/sd[j])),A=Z.map(r=>[1,...r]),At=tr(A),G=mm(At,A);
 for(let i=1;i<G.length;i++)G[i][i]+=alpha;
 const invG=inv(G),AtY=At.map(row=>[row.reduce((s,v,k)=>s+v*y[k],0)]);
 const beta=mm(invG,AtY).map(r=>r[0]);
 return {predict(x){const z=x.map((v,j)=>(v-mu[j])/sd[j]);return beta[0]+z.reduce((s,v,j)=>s+v*beta[j+1],0)}}
}
export function metrics(y,p){
 const n=y.length,mae=mean(y.map((v,i)=>Math.abs(v-p[i]))),rmse=Math.sqrt(mean(y.map((v,i)=>(v-p[i])**2))),ym=mean(y),sst=y.reduce((s,v)=>s+(v-ym)**2,0),ssr=y.reduce((s,v,i)=>s+(v-p[i])**2,0);
 let ok=0;for(let i=1;i<n;i++)if((y[i]>=y[i-1])===(p[i]>=y[i-1]))ok++;
 return {mae,rmse,r2:1-ssr/sst,direction:n>1?ok/(n-1):0}
}