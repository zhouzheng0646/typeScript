while $@
 do
  case $1 in
  -sb) source ~.bashrc;;
  -bjz) cd ~/jizha/protal2;npm run build;;
  -sjz) cd ~/jizha/protal2;npm run start;;
  *) echo 参数有误;;
  esac
  shift
 done
