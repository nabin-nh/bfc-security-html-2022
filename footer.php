            <?php
                $dir = (__DIR__ . '/parts/layout/footer/');
            ?>
            <footer class="bg-mine-shaft pt-5" id="main-footer">

                <div class="container-fluid">
                    <div class="row pb-5">

                        <div class="col-12 col-md-6 col-lg-5" id="logos">
                            <?php require_once ($dir . 'logos.php'); ?>
                        </div>

                        <div class="col-12 col-md-6 offset-lg-2 col-lg-5" id="contact">
                            <?php require_once ($dir . 'contact.php'); ?>
                        </div>

                    </div>
                </div>

                <div class="bottom-bar">
                    <div class="container">
                        <div class="row">
                            <div class="col-12" id="bottom-bar">
                                <?php require_once ($dir . 'bottom-bar.php'); ?>  
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        
        </div>
        
        <script src="/assets/build/js/app.min.js"></script>
    
    </body>

</html>