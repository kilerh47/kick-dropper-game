class Config {
    // The time in milliseconds that the game will run in an idle state before
    // deciding that it's time to hide itself. If there are no active drops
    // after this amount of time expires, the game will suspend itself and
    // restart at the next drop.
    //
    // Setting this to 0 disables this feature, causing the game to run
    // continuously.
    static IdleTime = 1000 * 30; // 30 saniye olarak güncellendi (Eski hali 1.5 dakikaydı)

    // If true, the user is allowed to trigger a cut of their parachute while
    // they are currently dropping. When cutting is turned on, the CutRange
    // specifies an array of values that indicates what interval of time (in
    // milliseconds) the drop should happen after it's triggered. This can be
    // null to have cuts be instant.
    static CutAllowed = true;
    static CutRange = [750, 1500];

    // When cuts are enabled, this is the Y position below which the cut cannot
    // be done any longer. Set this value to the height of the overlay to allow
    // a cut anywhere.
    static CutLockout = 1080;

    // If true, the user is allowed to abdicate their position on the board if
    // they're a winner. When this is set to false, the only way for the user to
    // get ejected from the board is if they get Highlandered or if the idle
    // time is reached (or the page otherwise reloads).
    static AbdicateAllowed = true;

    ////////////////////////////////////////////////////////////////////////////
    // THEME CONFIGURATION                                                    //
    ////////////////////////////////////////////////////////////////////////////
    static get currentTheme() {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            return params.get('theme') || 'classic';
        }
        return 'classic';
    }

    ////////////////////////////////////////////////////////////////////////////
    // IMAGE CONFIGURATION                                                    //
    ////////////////////////////////////////////////////////////////////////////
    //
    // The settings here tell the code the dimensions and sprite counts of the
    // images being used for the parachute, target and stock emote images.
    //
    // Each setting here configures:
    //     1. The dimensions of the overall image that holds the sprites
    //     2. The number of sprites contained in that sprite sheet
    //
    // The sprites should be packed left to right into the sheet, with full
    // rows of sprites filling the width of the image. If the number of sprites
    // is not an even multiple of the row size, the last row should be missing
    // sprites on it's right hand side.
    //
    // NOTE: The actual images themselves are specified in the CSS.
    ////////////////////////////////////////////////////////////////////////////
    static EmoteSpriteInfo = [280, 224, 20];
    static ParachuteSpriteInfo = [360, 360, 9];
    
    static get TargetSpriteInfo() {
        return this.currentTheme === 'dog' ? [390, 150, 1] : [390, 110, 1];
    }



}