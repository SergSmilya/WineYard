export interface IUserInfo {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    given_name: string;
    iat: number;
    iss: string;
    jti: string;
    name: string;
    nbf: number;
    picture: string;
    sub: string;
}

export interface IPhoneNumberInfo {
    carrier: string;             
    country_code: string;        
    country_name: string;        
    country_prefix: string;      
    international_format: string;
    line_type: string;           
    local_format: string;        
    location: string;            
    number: string;              
    valid: boolean;              
}