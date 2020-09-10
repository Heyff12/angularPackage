1.创建工作区

ng new xxxx --create-application=false  

xxxx为项目名

2.进入项目新建library

cd xxxx

ng g library my-lib --prefix=ml

3.编译
ng build my-lib --prod

4.编译后会生成dist文件，进入dist文件
cd dist
cd my-lib
5.打包

npm pack

6.发布
npm publish --access public