//calculate the factorial of numbers
int factorial(int n) {
  //Number equal to 0
  if (n == 0) {
      return 1;
  }
  //Number greater than or equal to 20
  else if(n >= 20){
    return 0;
  }
  //else calculate and return factorial
   else {
    return n * factorial(n - 1);
  }
}