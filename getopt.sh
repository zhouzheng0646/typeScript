set -- $(getopt a:bcd "$@")

while [ -n $1 ]
do
case $1 in
  	-a) echo option $1 $2
	    shift ;;
  	-b) echo option $1 ;;
  	-c) echo option $1 ;;	
  	-d) echo option $1 ;;
  	--) shift;break ;;
  	*) echo $1: 该参数不存在;;
esac
shift
done

const=0
for item in $@
do
  echo $[const=const+1] option $item
done

