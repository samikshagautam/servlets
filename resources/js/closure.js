const account = (function () {

    const accountInfoList = []; //accountInfoList is a private element of account

    //making public access to update and show keys(as function name):values(as function implementation)
    return {
        add: function (details) {
            accountInfoList.push(details);
        },

        display: function () {
            return accountInfoList;
        }
    }
})();

document.getElementById("create").onclick = function () {
    let account_name = document.getElementById("accountName").value;
    let deposit_amount = document.getElementById("depositAmount").value;

    account.add({ name: account_name, amount: deposit_amount });
    document.getElementById("displayArea").value = null;

    account.display().forEach((account) => {
        document.getElementById("displayArea").value += (`Account name: ${account.name}  Deposit: ${account.amount}` + "\n");
    });
};