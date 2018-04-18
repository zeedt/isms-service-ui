package com.zeed.isms.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Controller
@RequestMapping(value = "/")
public class LoginController {

    @Value("${oauth2.authentication.url:http://localhost:8011/oauth/token}")
    public String authenticationUrl;

    @Value("${oauth2.resource.id:isms-service}")
    public String resourceId;

    @Value("${oauth2.resource.password:secret}")
    public String resourcePassword;

    @RequestMapping(value = "login",method = RequestMethod.GET)
    public String login(){
        return "login";
    }


    @RequestMapping(value = "loginn",method = RequestMethod.POST)
    public @ResponseBody String login(@RequestParam HashMap<String,String> object){
            return "redirect:http://localhost:3001";
    }

}
