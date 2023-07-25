const balance=document.getElementById('Balance')
const depositAmount=document.getElementById('deposit');
const deposit=document.getElementById('deposit-btn');
const withdrawAmount=document.getElementById('withdraw');
const withdraw=document.getElementById('withdraw-btn')


class Bank{
    constructor(balance=0){
        this.balance=balance;

    }
    deposit(amount){
        this.balance+=amount
       console.log(`${this.balance}`);
       balance.innerHTML=`Current Balance: <span>${this.balance}</span>`
    }
    withdrawl(amount){
        if(this.balance==0){
            console.log(`${0}`);
            balance.innerHTML=`Current Balance: <span>${this.balance}</span>`;
        }else if(this.balance<amount){
            alert('Amount to withdraw is more than account balance');
        }
        else{
            this.balance-=amount;
            // console.log(`${this.balance}`)
            balance.innerHTML=`Current Balance: <span>${this.balance}</span>`;
        }
    }
}


const myBank=new Bank();
balance.innerHTML=`Current Balance: <span>${myBank.balance}</span>`
deposit.addEventListener('click',()=>{
    myBank.deposit(Number(depositAmount.value))
});
withdraw.addEventListener('click',()=>{
    myBank.withdrawl(Number(withdrawAmount.value));
});
