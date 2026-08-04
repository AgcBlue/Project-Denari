package agc.war.denari.blockyTest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.ui.Model;

@Controller 
public class Workspace 
{
    @GetMapping("/workspace")
    public String welcome(Model model) 
    {
        model.addAttribute("message", "Hello from Spring Boot!");
        return "workspace";
    }
}