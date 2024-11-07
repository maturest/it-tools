## 环境准备

- node 版本 16.20.0

## 📒 开始使用

- 克隆项目

```
git clone
```
    
- 安装依赖

```
npm install
```


- 安装前端项目依赖

```
cd frontend

npm install
```


- 打包流程

```
# 1、检查资源文件
npm run build-frontend

# 2、代码加密(选做)，加密后，会生成加密代码：/public/electron ，框架优先读取它，源代码则不生效。
npm run encrypt

# 清除加密的代码
npm run clean

# 3、打包

#预发布模式，测试一下功能是否正常
npm run start 

#准备，设置国内镜像
#如果第一次构建长时间卡住
#尝试删除 C:\Users\本机用户名\AppData\Local\electron\Cache 把这个目录清空，并重试

#打包 （windows版）

npm run build-w

npm run build-w-32 (32位)

npm run build-w-64 (64位)

npm run build-w-arm64 (arm64)

#打包 （windows 免安装版）

npm run build-wz

npm run build-wz-32 (32位)

npm run build-wz-64 (64位)

npm run build-wz-arm64 (arm64)

#打包 （mac版）

npm run build-m

npm run build-m-arm64 (m1芯片架构)

#打包 （linux版）

npm run build-l (32位 deb包)

npm run build-l-64 (64位 deb包)

npm run build-l-arm64 (64位 deb包 arm64)

npm run build-l-armv7l (64位 deb包 armv7l)

npm run build-lr-64 (64位 rpm包)

npm run build-lp-64 (64位 pacman包)
```