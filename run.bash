prep=../prep/prep
$prep '.' '$' ohm.ohm ohm.glue --stop=1 <ohm.ohm >regression.ohm
tr '\n' ' ' <ohm.ohm >temp.ohm
tr '\n' ' ' <regression.ohm >temp2.ohm
echo '***' diffing '***'
diff -w temp.ohm temp2.ohm
