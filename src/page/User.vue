<template>
   <div class="user">
    <el-card>
      <el-row :gutter="20">
          <el-col :span="18">
        
              <el-input placeholder="请输入内容" >
                 <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              
          </el-col>

          <el-col :span="6">
               <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
          </el-col>
      </el-row>
    </el-card>
   
    

      <el-table
    :data="gridData2"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>

   <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
   <el-form :model="form">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="日期" :label-width="formLabelWidth">
      <el-input v-model="form.date" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.address" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addUser(form)">确 定</el-button>
  </div>
</el-dialog>

   
    
   
    

     

   

 </div>
</template>


    



     
    
<script>
/*import Main from '@/components/main.vue'*/


export default {
  name: 'User',
  components:{
    
  },
 data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        gridData2:[],
        str:'',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          address: '',
          date: '',
          
        },
        formLabelWidth: '120px'
      }
        
    },
   
   created(){
        this.getList()
   },

   mounted(){
     
      
   },
    
    methods:{
       addUser(form){
           if(! form.name || ! form.address || ! form.date) return 
           
           /*解析缓存数据*/
           let str = localStorage.getItem('form')
           let olddata = eval('['+str+']')[0]
           olddata.push(form)

           /*将对象数组内部先转为JSON字符串，再将整个字符串拼接为新数组*/
            let data = olddata.map(item=>{return JSON.stringify(item)})
            let newdata = '[' + data + ']'
  
          /*将新数据写入缓存*/
           localStorage.setItem('form',newdata)
           

           this.dialogFormVisible = false
           this.form = {}
           this.getList()
           
       },
      getList(){
           if(!localStorage.getItem('form')) {
             this.gridData2 = this.gridData
             /*初始化form*/
             let data = this.gridData2.map(item=>{return JSON.stringify(item)})
             let datastr = '[' + data + ']'
             localStorage.setItem('form',datastr) 
            
           }else{
             this.str = localStorage.getItem('form')
             this.gridData2 = eval('['+this.str+']')[0]
           
           }
       }
    }

  }
</script>

<style scoped>
  .user{
    width:85%
  }


</style>



