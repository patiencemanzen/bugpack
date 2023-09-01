# Bugpack

User-friendly library designed to streamline the process of data validation and error message handling in Vue.js applications. 
You can effortlessly implement validation logic, ensuring your data remains accurate and consistent with laravel.

## Installation

To install the package don't require much requirement except to paste the following compand in laravel terminal,  and the you're good to go.

```bash
npm i patienceman-bugpack
```

## Usage
Import the package in your workspace
```javascript 
import Bugpack from "patienceman-bugpack";
```

initialize the bugpack and it will by default create error holder object for u 🎉, and it apply the some in 
``` vue.js ```, ``` react.js ``` and ``` node.js ```
```javascript 
// node.js
const packer = new Bugpack();
packer.defineForm({ password: "manirabona", username: "username" });
        
// vue.js
export default {
  data() {
    return {
      user_data: {
        username: "",
        password: ""
      },
      bugger: new Bugpacker(),
    };
  },
  methods: {
    createPost() {
      this.bugger.defineForm(this.user_data);
        
      axios.post("/api/post", this.bugger.models())
        .then(() => this.success = true)
        .catch((error) => {
          this.bugger.alignWith(error.response.data.errors);
        });
    }
  }
} 
```
So once u create and defined your form data, now u can use or get all created data:
```javascript 
// Get all models/object
packer.models();
  
// get all errors/object
packer.errors();
  
// Single error --> bugpack it will add 'Error' to created model
packer.usernameError;
```
For vue.js devs u can map the error like:
```html
<span class="col-lg-4 d-flex flex-column">
  <input type="text" placeholder="Username" v-model="user_data.username" />
  <label v-if="bugger.usernameError" class="text-danger">
      {{ bugger.usernameError }}
  </label>
</span>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

