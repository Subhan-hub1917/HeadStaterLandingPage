
// async function query(data) {
//     const response = await fetch(
//         "https://api-inference.huggingface.co/models/bert-base-uncased",
//         {
//             headers: { Authorization: `Bearer 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` },
//             method: "POST",
//             body: JSON.stringify(data),
//         }
//     );
//     const result = await response.json();
//     return result;
// }
// let ans;
// query({inputs:"Hello what can you do for me[MASK]."}).then((response) => {
//   let res=JSON.stringify(response)  
//   ans =JSON.parse(res)
//   console.log(ans[1].token_str);
// });