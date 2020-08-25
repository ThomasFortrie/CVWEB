
const ratio = 0.4;

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

  const handleIntersect = function(entries, observer){
      entries.forEach(function(entry){
          console.log(entry.intersectionRatio)
          if(entry.intersectionRatio > ratio){
              entry.target.classList.add('reveal-visible')
              observer.unobserve(entry.target)
          }else{
          }

      })
      console.log("handleIntersect")
  }
  
  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
    observer.observe(r)
  })