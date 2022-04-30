#!/bin/sh

###########
# Helpers #
###########

check_configs() {
    # check if yarn and npm cache are set
    yarn config list
}

#################
#  Somamission  #
#################

deploy_about() {
    echo "building: $DEPLOY_ROUTE"
    yarn run nx build about --configuration=production
    echo "deploying: $DEPLOY_ROUTE"
    NETLIFY_SITE_ID=$ABOUT_SITE_ID netlify deploy
    echo "deploy success! "
}

checkout_somamission() {
    echo "checkout: $DEPLOY_APP"
    git sparse-checkout set somamission
    cd somamission
    echo "installing node packages"
    yarn
    if [[ "$DEPLOY_ROUTE" == "about" ]]; then
        deploy_about
    else
        echo "cannot deploy: $DEPLOY_ROUTE"
    fi
}

##################
# Haightfillmore #
##################

deploy_catalog() {
    echo "building: $DEPLOY_ROUTE"
    yarn run nx build catalog --configuration=production
    echo "deploying: $DEPLOY_ROUTE"
    NETLIFY_SITE_ID=$CATALOG_SITE_ID netlify deploy
    echo "deploy success!"
}

checkout_haightfillmore() {
    echo "checkout: $DEPLOY_APP"
    git sparse-checkout set haightfillmore
    cd haightfillmore
    echo "installing node packages"
    yarn
    if [[ "$DEPLOY_ROUTE" == "catalog" ]]; then
        deploy_catalog
    else
        echo "cannot deploy: $DEPLOY_ROUTE"
    fi
}

install_global_npm() {
    npm install -g yarn
    npm install netlify-cli -g
}

update_netlify_config() {
    sed -i "s/BASE_PLACEHOLDER/${DEPLOY_APP}/g; s/PUBLISH_PLACEHOLDER/${DEPLOY_ROUTE}/g" netlify.toml
}

main() {
    echo "installing global npm packages"
    install_global_npm

    echo "updating netlify config"
    update_netlify_config
    
    echo "cloning git repository"
    git clone --no-checkout https://github.com/niculistana/nx-14-mfe.git
    cd nx-14-mfe
    git checkout main

    if [[ "$DEPLOY_APP" == "somamission" ]]; then
        checkout_somamission
    elif [[ "$DEPLOY_APP" == "haightfillmore" ]]; then
        checkout_haightfillmore
    else
        echo "cannot checkout: $DEPLOY_APP"
    fi
}

main
