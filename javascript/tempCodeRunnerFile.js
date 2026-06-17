const user = { name: "Chris", roles: ["admin"] };
const { roles } = user;
console.log(roles);

 const show4KButton = roles.includes("premium") || roles.includes("admin")  && "🟢 Show 4K Button";
 console.log(show4KButton);
