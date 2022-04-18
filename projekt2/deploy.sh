USERNAME="xmajer21"
SERVER_NAME="merlin"
DEST_FOLDER="~/WWW/itw"
rsync -av -e ssh --exclude='*.sh' . $USERNAME@$SERVER_NAME:$DEST_FOLDER
