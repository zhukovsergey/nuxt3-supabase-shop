//import multer from 'multer'
import { readFiles } from "h3-formidable";
import { serverSupabaseClient } from '#supabase/server'



export default defineEventHandler(async(event) => {
    const client = await serverSupabaseClient(event)
    try {
    const { fields, files } = await readFiles(event, {
        includeFields: true,
        // other formidable options below
        multiples: true,
        uploadDir: "./public/uploads",
        keepExtensions: true,
      });

      const body_files= files.images;
      let imagesArray = [];
      if (body_files && body_files.length > 0) {
        body_files.forEach((img) => {
          imagesArray.push({
            path: img.newFilename,
            mimetype: img.mimetype,
            test_case: body._id,
          });
        });
      }
      const fileUrl = []
      for (var i = 0; i < files.files.length; i++) {
      
        fileUrl.push(files.files[i].newFilename)
    }




      const { error } = await client
  .from('posts')
  .insert({ title: fields.title[0], body: fields.body[0],price: fields.price[0], imgs: fileUrl })
      
    
        
    } catch (err) {
        console.log(err)
    }

})