<?php

/* base.html.twig */
class __TwigTemplate_40619ddc05acbedbb89fc65fd6401f77a47827cc662baa4e9752cdade0b460d6 extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\">
            <title>
                ";
        // line 6
        $this->displayBlock('title', $context, $blocks);
        // line 7
        echo "            </title>
            ";
        // line 8
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 9
        echo "            <link href=\"https://fonts.googleapis.com/css?family=Open+Sans\" rel=\"stylesheet\">
             <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">
                <link rel=\"stylesheet\" href=\"";
        // line 11
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/app.css"), "html", null, true);
        echo "\"></head>
                <body>
                    <nav class=\"navbar navbar-expand-lg navbar-secondary bg-dark p-2\" id=\"nav\">
                        <a class=\"navbar-brand text-white\" href=\"";
        // line 14
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("about");
        echo "\">A <span class=\"text-success z h4\">Z</span> rica</a>
                        <button aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-target=\"#navbarSupportedContent\" data-toggle=\"collapse\" type=\"button\">
                            <span class=\"navbar-toggler-icon\"></span>
                        </button>
                        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">
                            <ul class=\"navbar-nav mr-auto \">
                                <li class=\"nav-item active\">
                                    <a class=\"nav-link text-white\" href=\"";
        // line 21
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("home");
        echo "\">Home
                                        <span class=\"sr-only\">(current)</span>
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link text-white\" href=\"";
        // line 26
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("about");
        echo "\">
                                        <A:link>about</A:link>
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link text-white\" href=\"";
        // line 31
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("contact_new");
        echo "\">
                                        <A:link>Contact</A:link>
                                    </a>
                                </li>
                                <li class=\"nav-item dropdown\">
                                    <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle text-white\" data-toggle=\"dropdown\" href=\"#\" id=\"navbarDropdown\" role=\"button\">
                                        Dropdown
                                    </a>
                                    <div aria-labelledby=\"navbarDropdown\" class=\"dropdown-menu bg-dark\">
                                        <a class=\"dropdown-item text-white\" href=\"#\">Action</a>
                                        <a class=\"dropdown-item text-white\" href=\"#\">Another action</a>
                                        <div class=\"dropdown-divider text-white\"></div>
                                        <a class=\"dropdown-item text-white\" href=\"#\">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        ";
        // line 48
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true), "username", [], "any", true, true)) {
            // line 49
            echo "                            <a class=\"text-white cart img-fluid\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("my_account");
            echo "\"><img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("images/products/shopping-cart.png"), "html", null, true);
            echo "\" alt=\"Cart\"></a>
                        <div class=\"nav-item dropdown\">
                                <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle text-white\" data-toggle=\"dropdown\" href=\"#\" id=\"navbarDropdown\" role=\"button\">
                                    ";
            // line 52
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new Twig_Error_Runtime('Variable "app" does not exist.', 52, $this->source); })()), "user", []), "lastname", []), "html", null, true);
            echo "
                                </a>
                                <div aria-labelledby=\"navbarDropdown\" class=\"dropdown-menu bg-dark mr-5 text-left\">
                                   <p>
                                    <a class=\"text-center m-2 text-white\" href=\"";
            // line 56
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("logout");
            echo "\">Sign out</a><br>
                                   </p>
                                   <p>
                                    <a class=\"text-center m-2 text-white\" href=\"";
            // line 59
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("my_account");
            echo "\">your account</a>
                                   </p>
                                </div>
                            </div>
                            
                        ";
        }
        // line 65
        echo "                        ";
        if ( !twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true), "username", [], "any", true, true)) {
            // line 66
            echo "                            <div class=\"nav-item dropdown\">
                                <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle text-white\" data-toggle=\"dropdown\" href=\"#\" id=\"navbarDropdown\" role=\"button\">
                                
                                     Account
                                
                                </a>
                                <div aria-labelledby=\"navbarDropdown\" class=\"dropdown-menu bg-white\">
                                    <a class='dropdown-item' href=\"";
            // line 73
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_register");
            echo "\">Sign up</a>
                                    <a class='dropdown-item' href=\"";
            // line 74
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
            echo "\">Sign in</a>
                                </div>
                            </div>
                        ";
        }
        // line 78
        echo "                    </nav>
                    ";
        // line 79
        $this->displayBlock('body', $context, $blocks);
        // line 81
        echo "                    ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 82
        echo "                    <script crossorigin=\"anonymous\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"></script>
                    <script crossorigin=\"anonymous\" integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"></script>
                    <script crossorigin=\"anonymous\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\" src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"></script>
                </body>
            </html>
        ";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 6
    public function block_title($context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Welcome!";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 8
    public function block_stylesheets($context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 79
    public function block_body($context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 80
        echo "                    ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 81
    public function block_javascripts($context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  236 => 81,  226 => 80,  217 => 79,  200 => 8,  182 => 6,  167 => 82,  164 => 81,  162 => 79,  159 => 78,  152 => 74,  148 => 73,  139 => 66,  136 => 65,  127 => 59,  121 => 56,  114 => 52,  105 => 49,  103 => 48,  83 => 31,  75 => 26,  67 => 21,  57 => 14,  51 => 11,  47 => 9,  45 => 8,  42 => 7,  40 => 6,  33 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\">
            <title>
                {% block title %}Welcome!{% endblock %}
            </title>
            {% block stylesheets %}{% endblock %}
            <link href=\"https://fonts.googleapis.com/css?family=Open+Sans\" rel=\"stylesheet\">
             <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">
                <link rel=\"stylesheet\" href=\"{{ asset('build/app.css') }}\"></head>
                <body>
                    <nav class=\"navbar navbar-expand-lg navbar-secondary bg-dark p-2\" id=\"nav\">
                        <a class=\"navbar-brand text-white\" href=\"{{ path('about') }}\">A <span class=\"text-success z h4\">Z</span> rica</a>
                        <button aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-target=\"#navbarSupportedContent\" data-toggle=\"collapse\" type=\"button\">
                            <span class=\"navbar-toggler-icon\"></span>
                        </button>
                        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">
                            <ul class=\"navbar-nav mr-auto \">
                                <li class=\"nav-item active\">
                                    <a class=\"nav-link text-white\" href=\"{{ path('home')}}\">Home
                                        <span class=\"sr-only\">(current)</span>
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link text-white\" href=\"{{path('about') }}\">
                                        <A:link>about</A:link>
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link text-white\" href=\"{{ path('contact_new')}}\">
                                        <A:link>Contact</A:link>
                                    </a>
                                </li>
                                <li class=\"nav-item dropdown\">
                                    <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle text-white\" data-toggle=\"dropdown\" href=\"#\" id=\"navbarDropdown\" role=\"button\">
                                        Dropdown
                                    </a>
                                    <div aria-labelledby=\"navbarDropdown\" class=\"dropdown-menu bg-dark\">
                                        <a class=\"dropdown-item text-white\" href=\"#\">Action</a>
                                        <a class=\"dropdown-item text-white\" href=\"#\">Another action</a>
                                        <div class=\"dropdown-divider text-white\"></div>
                                        <a class=\"dropdown-item text-white\" href=\"#\">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {% if app.user.username is defined %}
                            <a class=\"text-white cart img-fluid\" href=\"{{ path('my_account') }}\"><img src=\"{{ asset('images/products/shopping-cart.png') }}\" alt=\"Cart\"></a>
                        <div class=\"nav-item dropdown\">
                                <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle text-white\" data-toggle=\"dropdown\" href=\"#\" id=\"navbarDropdown\" role=\"button\">
                                    {{app.user.lastname}}
                                </a>
                                <div aria-labelledby=\"navbarDropdown\" class=\"dropdown-menu bg-dark mr-5 text-left\">
                                   <p>
                                    <a class=\"text-center m-2 text-white\" href=\"{{ path('logout')}}\">Sign out</a><br>
                                   </p>
                                   <p>
                                    <a class=\"text-center m-2 text-white\" href=\"{{ path('my_account') }}\">your account</a>
                                   </p>
                                </div>
                            </div>
                            
                        {% endif %}
                        {% if app.user.username is not defined %}
                            <div class=\"nav-item dropdown\">
                                <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle text-white\" data-toggle=\"dropdown\" href=\"#\" id=\"navbarDropdown\" role=\"button\">
                                
                                     Account
                                
                                </a>
                                <div aria-labelledby=\"navbarDropdown\" class=\"dropdown-menu bg-white\">
                                    <a class='dropdown-item' href=\"{{ path('app_register')}}\">Sign up</a>
                                    <a class='dropdown-item' href=\"{{ path('app_login')}}\">Sign in</a>
                                </div>
                            </div>
                        {% endif %}
                    </nav>
                    {% block body %}
                    {% endblock %}
                    {% block javascripts %}{% endblock %}
                    <script crossorigin=\"anonymous\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"></script>
                    <script crossorigin=\"anonymous\" integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"></script>
                    <script crossorigin=\"anonymous\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\" src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"></script>
                </body>
            </html>
        ", "base.html.twig", "/var/www/html/my_e_commerce/templates/base.html.twig");
    }
}
