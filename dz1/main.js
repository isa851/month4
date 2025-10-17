const fun1 = (text) => {
    return /\b(?:JS|CSS|HTML)\b/i.test(text);
  }
  console.log(fun1("я изучил Beckend разработку там есть PYTHON,DJANGO,LINUX")); 
  console.log(fun1("я изучил Frontend разработку там есть JS HTML CSS"));
  
  
  
  
  
  // 0 + 1 = 1 + 2 = 3, 2 + 3 = 5 и т.д
  
  const fun2 = (n) =>{
      if(n <= 1) return n;
      return fun2(n - 1) + fun2(n - 2)
  }
  console.log(fun2(6));