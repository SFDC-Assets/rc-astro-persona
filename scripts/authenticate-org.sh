#USER_ALIAS=HPI_PRM1
USER_ALIAS=CISCO_NG
LOGIN_URL=https://login.salesforce.com
echo authenticating org w/ USER_ALIAS = $USER_ALIAS and LOGIN_URL = $LOGIN_URL
sfdx force:auth:web:login -a $USER_ALIAS -r $LOGIN_URL