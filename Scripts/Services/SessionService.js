var SessionService = function($cookies){
    this.token = undefined;

     this.getToken = function(){
        if(!$cookies.AngularJSWebApp2Token){
            if(!this.token){
                return undefined;
            }
            this.setToken(this.token);            
        }
        return $cookies.AngularJSWebApp2Token;
    }
    
    this.setToken = function(token){
        this.token = token;
        $cookies.AngularJSWebApp2Token = token;
    }

    this.apiUrl = 'http://localhost:61164';
}

SessionService.$inject = ['$cookies'];