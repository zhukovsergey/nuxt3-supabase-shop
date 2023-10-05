import { defineStore } from 'pinia'
export const useCart = defineStore('cart', {
    state: () => ({
      cart: [],
      total: 0,
    }),
    actions: {
      addToStore(post) {
        if (this.cart.findIndex(f => f.title === post.title) === -1) { 
            console.log('not contain')
            post.count = 1
            post.sum = post.price*post.count
            this.total +=post.sum
            this.cart.push(post)
          } else {
            
            const result = this.cart.map(x => {
                
                if(x.id == post.id) {
                    console.log(x.count)
                    x.count += 1
                    x.sum = x.count* x.price
                }
              });
              this.total = 0
              for (var i in this.cart) {
                this.total += this.cart[i].sum;
               }
          }
      },
      deleteFromStore(id) {
        var newArray = this.cart.filter((item) => item.id !== id);
        
this.cart = newArray;
console.log(this.cart.target)
this.total = 0
 for (var i in this.cart) {
          this.total += this.cart[i].sum;
         }

      }
    },
    getters: {
      getCart: (state) => state.cart,
      getTotalSum: (state)=>  state.total,
     // {
        // for (var i in state.cart) {
        //     state.total += state.cart[i].sum;
        //   }
        //   return state.total
     // }
    },
  })